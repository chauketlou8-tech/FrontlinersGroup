import prismaClient from "../config/db"
import asyncHandler from "../middleware/AsyncHandler";
import type { Admin } from "../types/Admin";
import type { req, res, next } from "../types/express"
import { NotFoundError, ValidationError, AuthenticationError } from "../errors";
import { env } from "../config/env";
import redisClient from "../config/redisClient";
import bcrypt from "bcryptjs";
import jwt, { JwtPayload } from "jsonwebtoken";
import HelperFunctions from "../utils/helpers"
import { logger } from "../config/logger";
import sendEmail from "../services/admin/email.services";



const login = asyncHandler(async (req: req, res: res, next: next) => {
    const { email, password } = req.body;
    const client = await redisClient;

    const admin: Admin = await prismaClient.admin.findUnique({
        where: { email },
    }
    );

    if (!admin) {
        return next(new NotFoundError("Admin does not exist"));
    }

    const isMatch = await bcrypt.compare(password, admin.hashed_password);

    if (!isMatch) {
        return next(new AuthenticationError("Passwords do not match"));
    }

    const token = jwt.sign(
        { id: admin.id, email: admin.email, role: admin.role },
        env.JWT_SECRET!,
        { expiresIn: "1h" }
    );

    const refreshToken = jwt.sign(
        { id: admin.id, email: admin.email, role: admin.role },
        env.JWT_REFRESH_SECRET!,
        { expiresIn: "7d" }
    );

    await prismaClient.sessions.create({
        data: {
            user_id: admin.id,
            refresh_token: refreshToken,
            expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
        }
    });

    await client.set(`online:${admin.id}`, "true", { EX: 3600 });

    return res.status(200).json({
        success: true,
        admin: {
            id: admin.id,
            email: admin.email,
            role: admin.role,
        },
        token,
        refreshToken,
    });
});

const logout = asyncHandler(async (req: req, res: res) => {
    const client = await redisClient;
    const id = req.params.id;

    await client.del(`online:${id}`);

    await prismaClient.sessions.delete({ where: { user_id: Number(id) } });

    return res.status(200).json({
        success: true,
        message: "Successfully logged out",
    });
});

//function to get the reset password link
const resetPassword = asyncHandler(async (req: req, res: res, next: next) => {
    const { email } = req.body;
    const client = await redisClient;

    const admin: Admin = await prismaClient.admin.findUnique({ where: { email } });

    if (!admin) {
        return next(new NotFoundError("Admin does not exist"));
    }

    const token = HelperFunctions.generateRandomID();
    await client.set(`reset:${token}`, admin.id, { EX: 900 });
    const link = `https://frontlinersgroup.com/reset-password?token=${token}`;

    logger.info(`Password reset requested for user ${admin.name}`);

    const message = `
        Hi ${admin.name},
        
        We received a request to reset your password. 
        Click the link below to set a new password (valid for 15 minutes):
        
        ${link}
        
        If you did not request this, please ignore this email. 
        Your account will remain secure.
        
        Best regards,
        Frontliners Group Support
    `;

    const subject = "Frontliners Group – Password Reset Link"

    await sendEmail(admin, subject, message);

    logger.info(`email sent to ${admin.name}, subject ${subject}`);

    return res.status(200).json({
        success: true,
    });
});

const validateToken = asyncHandler(async (req: req, res: res, next: next) => {
    const token = req.query.token;
    const client = await redisClient;

    if (typeof token !== "string") {
        return next(new ValidationError("Invalid token"));
    }

    const id = await client.get(`reset:${token}`);

    if (!id) {
        return next(new ValidationError("Token expired or invalid"));
    }

    return res.status(200).json({
        success: true,
        id
    });

});

const setNewPassword = asyncHandler(async (req: req, res: res, next: next) => {
    const newPassword: string = req.body.newPassword;
    const token = req.query.token;
    const client = await redisClient;

    if (typeof token !== "string") {
        return next(new ValidationError("Invalid token"));
    }

    const id = await client.get(`reset:${token}`);

    if (!id) {
        return next(new ValidationError("Token expired or invalid"));
    }

    const hashedPassword = await HelperFunctions.hashPassword(newPassword)
    const admin = await prismaClient.admin.update({
        where: { id: Number(id) },
        data: {
            hashed_password: hashedPassword
        },
        select: { id: true, email: true, role: true }
    });

    await client.del(`reset:${token}`);

    return res.status(200).json({
        success: true,
        admin,
    });
});

const refreshUserToken = asyncHandler(async (req: req, res: res, next: next) => {
    const refresh_token = req.body.refresh_token;

    if (!refresh_token) {
        return next(new ValidationError("Refresh token is required"));
    }

    // verify token first
    let decoded;
    try {
        decoded = jwt.verify(refresh_token, env.JWT_REFRESH_SECRET!)  as JwtPayload;
    } catch (err) {
        return next(new AuthenticationError("Invalid refresh token"));
    }

    // check session exists
    // @ts-ignore
    const session = await prismaClient.sessions.findUnique({ where: { refresh_token }})

    if (!session) {
        return next(new AuthenticationError("Refresh token not found"));
    }

    // check expiry
    if (new Date(session.expires_at) < new Date()) {
        // @ts-ignore
        await prismaClient.sessions.delete({ where: { refresh_token }});
        return next(new AuthenticationError("Refresh token expired"));
    }

    // ROTATION: delete old session (prevents reuse)
    // @ts-ignore
    await prismaClient.sessions.delete({ where: { refresh_token } })

    // issue new access token
    const accessToken = jwt.sign(
        { id: decoded.id, email: decoded.email, role: decoded.role },
        env.JWT_SECRET!,
        { expiresIn: "1h" }
    );

    // issue new refresh token
    const newRefreshToken = jwt.sign(
        { id: decoded.id, email: decoded.email, role: decoded.role },
        env.JWT_REFRESH_SECRET!,
        { expiresIn: "7d" }
    );

    // store new session
    await prismaClient.sessions.create({
        data: {
            user_id: decoded.id,
            refresh_token: newRefreshToken,
            expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        }
    })

    return res.status(200).send({
        token: accessToken,
        refreshToken: newRefreshToken
    });
});

export {
    login,
    logout,
    resetPassword,
    validateToken,
    setNewPassword,
    refreshUserToken,
};
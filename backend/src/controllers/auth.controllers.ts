import connectDB from "../config/db";
import asyncHandler from "../middleware/AsyncHandler";
import type { Admin } from "../types/Admin";
import type { req, res, next } from "../types/express"
import { NotFoundError, ValidationError, AuthenticationError } from "../errors";
import { env } from "../config/env";
import redisClient from "../config/redisClient";
import bcrypt from "bcryptjs";
import jwt, { JwtPayload } from "jsonwebtoken";
import HelperFunctions from "../utils/helpers"
import Response from "../utils/response"
import { logger } from "../config/logger";
import sendEmail from "../services/admin/email.services";

const pool = connectDB(env.dbUrl!);

const login = asyncHandler(async (req: req, res: res, next: next) => {
    const { email, password } = req.body;
    const client = await redisClient;

    const result = await pool.query(`select * from admin where email = $1`, [email]);
    const admin: Admin = result.rows[0];

    if (!admin) {
        return next(new NotFoundError("Admin does not exist"));
    }

    const isMatch = await bcrypt.compare(password, admin.password);

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

    const expires_at = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

    await pool.query(`insert into sessions(user_id, refresh_token, expires_at) values($1, $2, $3)`, [admin.id, refreshToken, expires_at]);

    await client.set(`online:${admin.id}`, "true", { EX: 3600 });

    return Response.success(res, {
        data: { admin: { id: admin.id, email: admin.email, role: admin.role}, token, refreshToken }
    });
});

const logout = asyncHandler(async (req: req, res: res) => {
    const client = await redisClient;
    const id = req.params.id;

    await client.del(`online:${id}`);
    await pool.query(`delete from sessions where user_id = $1`, [Number(id)]);

    return Response.success(res, {
        message: "Successfully logged out"
    });
});

//function to get the reset password link
const resetPassword = asyncHandler(async (req: req, res: res, next: next) => {
    const email = req.body.email;
    const client = await redisClient;

    const result = await pool.query(`select * from admin where email = $1`, [email]);
    const admin: Admin = result.rows[0];

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

    return Response.success(res);
});

const validateToken = asyncHandler(async (req: req, res: res, next: next) => {
    const token = req.query.token;
    const client = await redisClient;

    const id = await client.get(`reset:${token}`);

    if (!id) {
        return next(new ValidationError("Token expired or invalid"));
    }

    return Response.success(res, {
        data: { id }
    });

});

const setNewPassword = asyncHandler(async (req: req, res: res, next: next) => {
    const newPassword: string = req.body.newPassword;
    const token = req.query.token;
    const client = await redisClient;

    const id = await client.get(`reset:${token}`);

    if (!id) {
        return next(new ValidationError("Token expired or invalid"));
    }

    const hashedPassword = await HelperFunctions.hashPassword(newPassword)

    const result = await pool.query(`update admin set password = $1 where id = $2 returning *`, [hashedPassword, id]);
    const admin: Admin = result.rows[0];

    if (!admin) {
        return next(new NotFoundError("Admin not found"));
    }

    await client.del(`reset:${token}`);

    return Response.success(res, {
        data: { admin: { id: admin.id, email: admin.email, role: admin.role} }
    })
});

const refreshUserToken = asyncHandler(async (req: req, res: res, next: next) => {
    const refresh_token = req.body.refresh_token;

    // verify token first
    let decoded;
    try {
        decoded = jwt.verify(refresh_token, env.JWT_REFRESH_SECRET!)  as JwtPayload;
    } catch (err) {
        return next(new AuthenticationError("Invalid refresh token"));
    }

    // check session exists
    const result = await pool.query(`select * from sessions where refresh_token = $1`, [refresh_token]);
    const session = result.rows[0];

    if (!session) {
        return next(new AuthenticationError("Refresh token not found"));
    }

    // check expiry
    if (new Date(session.expires_at) < new Date()) {
        await pool.query(`delete from sessions where refresh_token = $1`, [refresh_token]);
        return next(new AuthenticationError("Refresh token expired"));
    }

    // ROTATION: delete old session (prevents reuse)
    await pool.query(`delete from sessions where refresh_token = $1`, [refresh_token]);

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
    const expires_at = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    await pool.query(`insert into sessions(user_id, refresh_token, expires_at) values($1, $2, $3)`, [decoded.id, newRefreshToken, expires_at])

    return Response.success(res, {
        data: { token: accessToken, refresh_token: newRefreshToken }
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
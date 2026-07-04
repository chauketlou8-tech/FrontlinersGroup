import prismaClient from "../config/db"
import asyncHandler from "../middleware/AsyncHandler"
import { ValidationError, ConflictError } from "../errors"
import type { req, res, next } from "../types/express"
import HelperFunctions from "../utils/helpers"
import Response from "../utils/response"
import { logger } from "../config/logger"


const createAdmin = asyncHandler(async (req: req, res: res, next: next) => {
    const { name, email, password } = req.body;

    const superEmails = ["chauketlou8@gmail.com", "chktlo003@myuct.ac.za"]
    const adminEmails = [""]

    if (!name || !email || !password) {
        return next(new ValidationError("Missing credentials"))
    }

    const existing_user = await prismaClient.admin.findMany({ where: { email } });

    if (existing_user) {
        return next(new ConflictError("Email already in use"));
    }

    const hashed_password = await HelperFunctions.hashPassword(password);
    const role = superEmails.includes(email) ? "SUPER" : (adminEmails.includes(email) ? "ADMIN" : "VIEWER");

    const admin = await prismaClient.admin.create({
        data: {
            name,
            email,
            hashed_password,
            role
        }
    });

    logger.info(`Admin ${admin.name} created successfully.`);

    return Response.created(res, {
        message: "Successfully created admin",
        data: { admin: { id: admin.id, email: admin.email, role: admin.role} }
    });
});

export {
    createAdmin
}
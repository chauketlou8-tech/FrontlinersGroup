import { PrismaClient } from "@prisma/client";
import asyncHandler from "../middleware/AsyncHandler";
import type { Admin } from "../types/Admin";
import type { req, res, next } from "../types/express"
import NotFoundError from "../errors/NotFoundError";
import ValidationError from "../errors/ValidationError";
import bcrypt from "bcryptjs";

const prismaClient = new PrismaClient();

const login = asyncHandler(async (req: req, res: res, next: next) => {
    const { email, password } = req.body;
    const super_emails = ["chauketlou8@gmail.com", "chktlo0033@myuct.ac.za"]

    //use super and viewer for now since there is no admin yet
    const role = super_emails.includes(email) ? "SUPER" : "VIEWER";
    const admin: Admin = await prismaClient.admin.findUnique({ where: email });

    if (!admin) {
        return next(new NotFoundError("Admin does not exist"));
    }

    const isMatch = await bcrypt.compare(password, admin.hashed_password);

    if (!isMatch) {
        return next(new ValidationError("Passwords do not match"));
    }

    admin.role = role;

    return res.status(200).json({
        success: true,
        admin,
    });
});

export default login;
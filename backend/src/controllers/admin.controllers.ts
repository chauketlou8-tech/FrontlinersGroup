import connectDB from "../config/db"
import asyncHandler from "../middleware/AsyncHandler"
import type { req, res, next } from "../types/express"
import HelperFunctions from "../utils/helpers"
import Response from "../utils/response"
import { logger } from "../config/logger"
import { env } from "../config/env";

const createAdmin = asyncHandler(async (req: req, res: res, next: next) => {
    const { name, email, password } = req.body;
    const pool = connectDB(env.dbUrl!)

    const superEmails = ["chauketlou8@gmail.com", "chktlo003@myuct.ac.za"]
    const adminEmails = [""]

    const hashed_password = await HelperFunctions.hashPassword(password);
    const role = superEmails.includes(email) ? "SUPER" : (adminEmails.includes(email) ? "ADMIN" : "VIEWER");

    const result = await pool.query(`insert into admin (name, email, password, role) values ($1, $2, $3, $4) returning *`, [name, email, hashed_password, role]);
    const admin = result.rows[0];

    logger.info(`Admin ${admin.name} created successfully.`);

    return Response.created(res, {
        message: "Successfully created admin",
        data: { admin: { id: admin.id, email: admin.email, role: admin.role} }
    });
});

export {
    createAdmin
}
import { next, req, res } from "../types/express";
import { ConflictError, ValidationError } from "../errors";
import connectDB from "../config/db"
import { env } from "std-env";

const pool = connectDB(env.dbUrl!)

class AdminValidator {
    public async createValidation(req: req, res: res, next: next) {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return next(new ValidationError("Missing credentials"))
        }

        const result = await pool.query(`select * from admin where email = $1`, [email]);
        const existing_user = result.rows[0];

        if (existing_user) {
            return next(new ConflictError("Email already in use"));
        }
    }
}

export default new AdminValidator();
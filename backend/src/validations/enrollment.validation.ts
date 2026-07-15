import { ValidationError, ConflictError } from "../errors";
import HelperFunctions from "../utils/helpers";
import type { res, req, next } from "../types/express"
import connectDB from "../config/db"
import { env } from "std-env";

const pool = connectDB(env.dbUrl!)

class EnrollmentValidator {
    public async enrollmentValidation(req: req, res: res, next: next) {
        let { name, surname, grade, subject, phoneNumber, email } = req.body;

        if (!name || !surname || !grade || !subject || !phoneNumber) {
            return next(new ValidationError("Missing fields"));
        }

        if (email) {
            if (!HelperFunctions.validateEmail(email)) {
                return next(new ValidationError("Invalid email"));
            }

            const result = await pool.query(`select * from admin where email = $1`, [email]);
            const existing_user = result.rows[0];

            if (existing_user) {
                return next(new ConflictError("Email already in use"));
            }
        }

        if(!HelperFunctions.isValidNumber(phoneNumber.split(" ").join())) {
            return next(new ValidationError("Invalid phone number"));
        }

        next();
    }
}

export default new EnrollmentValidator();
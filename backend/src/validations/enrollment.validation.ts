import { ValidationError, ConflictError } from "../errors";
import HelperFunctions from "../utils/helpers";
import type { res, req, next } from "../types/express"
import prismaClient from "../config/db"

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

            const existing_user = await prismaClient.admin.findMany({ where: { email } });

            if (existing_user) {
                return next(new ConflictError("Email in use"));
            }
        }

        if(!HelperFunctions.isValidNumber(phoneNumber.split(" ").join())) {
            return next(new ValidationError("Invalid phone number"));
        }

        next();
    }
}

export default new EnrollmentValidator();
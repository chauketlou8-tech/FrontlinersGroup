import { next, req, res } from "../types/express";
import { ConflictError, ValidationError } from "../errors";
import prismaClient from "../config/db"


class AdminValidator {
    public async createValidation(req: req, res: res, next: next) {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return next(new ValidationError("Missing credentials"))
        }

        const existing_user = await prismaClient.admin.findMany({ where: { email } });

        if (existing_user) {
            return next(new ConflictError("Email already in use"));
        }
    }
}

export default new AdminValidator();
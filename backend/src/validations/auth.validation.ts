import { ValidationError } from "../errors";
import HelperFunctions from "../utils/helpers";
import type { res, req, next } from "../types/express"

class AuthValidator {
    public loginValidation(req: req, res : res, next: next) {
        const { email, password } = req.body;

        if (!email || !password) {
            return next(new ValidationError("Missing email or password"));
        }

        if (!HelperFunctions.validateEmail(email)) {
            return next (new ValidationError("Invalid email"));
        }

        next();
    }

    public resetPasswordValidation(req: req, res : res, next: next) {
        const { email } = req.body;

        if (!email) {
            return next(new ValidationError("Missing email"));
        }

        if (!HelperFunctions.validateEmail(email)) {
            return next (new ValidationError("Invalid email"));
        }

        next();
    }

    public resetTokenValidation(req: req, res : res, next: next) {
        const token = req.query.token;

        if (!token) {
            return next(new ValidationError("Missing token"));
        }

        if (typeof token !== "string") {
            return next(new ValidationError("Invalid token"));
        }

        next();
    }

    public newPasswordValidation(req: req, res : res, next: next) {
        const { newPassword } = req.body;

        if (!newPassword) {
            return next(new ValidationError("Password missing"));
        }

        next();
    }

    public refreshTokenValidation(req: req, res : res, next: next) {
        const refresh_token = req.body.refresh_token;

        if (!refresh_token) {
            return next(new ValidationError("Refresh token is required"));
        }

        next();
    }
}

export default new AuthValidator();
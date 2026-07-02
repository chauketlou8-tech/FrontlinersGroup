import AppError from "./AppError";
import { authentication_code } from "./ErrorCodes";

export default class AuthenticationError extends AppError {
    constructor(message: string = "Not Authenticated") {
        super(message, authentication_code);
    }
}
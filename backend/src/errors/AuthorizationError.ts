import AppError from './AppError';
import { authorization_code } from "./ErrorCodes";

export default class AuthorizationError extends AppError {
    constructor(message: string = "Unauthorized") {
        super(message, authorization_code);
    }
}
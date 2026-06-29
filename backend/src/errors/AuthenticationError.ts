import AppError from "./AppError";

export default class AuthenticationError extends AppError {
    constructor(message: string = "Not Authenticated") {
        super(message, 401);
    }
}
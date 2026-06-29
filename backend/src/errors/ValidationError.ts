import AppError from "./AppError";

export default class ValidationError extends AppError {
    constructor(message: string = "Validation Error") {
        super(message, 400);
    }
}
import AppError from "./AppError";
import { validation_code } from "./ErrorCodes";

export default class ValidationError extends AppError {
    constructor(message: string = "Validation Error") {
        super(message, validation_code);
    }
}
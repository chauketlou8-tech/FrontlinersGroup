import AppError from "./AppError";
import { conflict_code } from "./ErrorCodes";

export default class ConflictError extends AppError {
    constructor(message: string = "Conflict") {
        super(message, conflict_code);
    }
}
import AppError from './AppError';
import { internalServer_code } from "./ErrorCodes";

export default class DatabaseError extends AppError {
    constructor(message: string = "Database Error") {
        super(message, internalServer_code);
    }
}
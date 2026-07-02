import AppError from './AppError';
import { notFound_code } from './ErrorCodes';

export default class NotFoundError extends AppError {
    constructor(message: string = "Not Found") {
        super(message, notFound_code);
    }
}
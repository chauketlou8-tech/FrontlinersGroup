import AppError from './AppError';

export default class DatabaseError extends AppError {
    constructor(message: string = "Database Error") {
        super(message, 500);
    }
}
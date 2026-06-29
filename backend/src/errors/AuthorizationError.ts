import AppError from './AppError';

export default class AuthorizationError extends AppError {
    constructor(message: string = "Unauthorized") {
        super(message, 403);
    }
}
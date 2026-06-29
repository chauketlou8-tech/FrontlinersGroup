import AppError from './AppError';

const createError = (message: string , statusCode: number) => {
    return new AppError(message, statusCode);
}

export default createError;
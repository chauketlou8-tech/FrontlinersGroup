import express from "express";
//@ts-ignore
const asyncHandler = (fn) => {
    return async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            await fn(req, res, next);
        }
        catch (error) {
            next(error);
        }
    }
}

module.exports = asyncHandler;
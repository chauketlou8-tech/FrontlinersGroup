import express from "express";
import { logger } from "../config/logger";
import createError from "../errors/createError";

const adminMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    //@ts-ignore
    const role = req.user.role;

    if (role !== 'admin') {
        logger.error("Unauthorized authentication");
        return next(createError("Not Authorized", 403));
    }

    next();
}

export default adminMiddleware;
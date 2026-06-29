import express from "express";
import { logger } from "../config/logger";

const requestLogger = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const start = Date.now();

    res.on("finish", () => {
        const duration = Date.now() - start;
        logger.info(`${req.method} ${req.originalUrl} ${res.statusCode} ${duration}ms`);
    });

    next();
};

export default requestLogger;
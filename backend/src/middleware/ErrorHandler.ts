import express from "express";
import { logger } from "../config/logger";
import { env } from "../config/env";

const errorHandler = (err: { statusCode: number; message: any; stack: any; }, req: express.Request, res: express.Response, next: express.NextFunction) => {
    logger.error(err.stack);
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        success: false,
        message: err.message || "Internal Server Error",
        stack: env.node_env === 'development' ? err.stack : null,
    });

    next();
};

export default errorHandler;
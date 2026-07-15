import jwt from "jsonwebtoken";
import express from "express";
import createError from "../errors/createError";
import { logger } from "../config/logger";
import { env } from "../config/env";

const authenticationMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        logger.error("Unauthorized authentication");
        return next(createError("Unauthorized", 403));
    }

    const token = authHeader.split(" ")[1];

    try {

        const decoded = jwt.verify(token, env.JWT_SECRET!);
        // @ts-ignore
        const { id, name, role } = decoded;
        //@ts-ignore
        req.user = { id, name, role };
        next()
    }
    catch(err){
        logger.error("Unauthorized authentication");
        return next(createError("Not Authenticated", 401));
    }
}

export default authenticationMiddleware;
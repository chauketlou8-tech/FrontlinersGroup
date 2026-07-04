import type { res, req, next } from "../types/express"
import { AuthorizationError } from "../errors";

const adminMiddleware = (req: req, res: res, next: next) => {
    //@ts-ignore
    const role = req.user.role;

    if (role !== 'admin') {
        return next(new AuthorizationError("Not Authorized"));
    }

    next();
}

export default adminMiddleware;
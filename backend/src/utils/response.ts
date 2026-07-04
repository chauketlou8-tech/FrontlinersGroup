//helper class to format responses
import { res } from "../types/express"

class Response {

    public success(res: res, meta?: { message?: string, data?: any }, status = 200) {
        return res.status(status).json({
            success: true,
            message: meta?.message || null,
            data: meta?.data || null
        });
    }

    public created(res: res, meta?: { message?: string, data?: any }, status = 201) {
        return res.status(status).json({
            success: true,
            message: meta?.message || null,
            data: meta?.data || null,
        });
    }
}

export default new Response();
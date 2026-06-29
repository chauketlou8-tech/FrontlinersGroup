import cors from "cors";
import { corsOptions } from "../config/cors";

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;
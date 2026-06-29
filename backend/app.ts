//main app logic

import express from "express";
import corsMiddleware from "./src/middleware/Cors";
import errorHandler from "./src/middleware/ErrorHandler";
import requestLogger from "./src/middleware/RequestLogger";
import rateLimiter from "./src/middleware/RateLimiter";

const app = express();

//middleware
app.use(rateLimiter)
app.use(corsMiddleware);
app.use(express.json());
app.use(requestLogger);

//routes

app.use(errorHandler);

export default app;
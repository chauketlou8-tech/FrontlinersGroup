//main app logic

import express from "express";
import corsMiddleware from "./src/middleware/Cors";
import errorHandler from "./src/middleware/ErrorHandler";
import requestLogger from "./src/middleware/RequestLogger";
import rateLimiter from "./src/middleware/RateLimiter";
import routes from "./src/routes";

const app = express();

//middleware
app.use(rateLimiter)
app.use(corsMiddleware);
app.use(express.json());
app.use(requestLogger);

//routes
app.use("/api/v1", routes);

//error handler
app.use(errorHandler);

export default app;
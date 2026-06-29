import app from "./app";
import connectDB from "./src/config/db";
import { env } from "./src/config/env";
import { logger } from "./src/config/logger";

class Server {
    public async start() {
        try {
            await connectDB.connect(env.dbUrl!);

            logger.info("Database Connected!");

            app.listen(env.port, () => {
                logger.info(`Server started on port ${env.port}`);
            });

        } catch (err) {
            logger.error(`Error connecting to DB: ${err}`);
            process.exit(1);
        }
    }
}

const server = new Server();
void server.start();
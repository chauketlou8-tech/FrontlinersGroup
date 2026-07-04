import app from "./app";
import { env } from "./src/config/env";
import { logger } from "./src/config/logger";
import connectRedis from "./src/config/connectRedis";

class Server {
    public async start() {
        try {
            await connectRedis(env.redisUrl!);
            logger.info("Connected to redis")

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
//function to connect to redis

import { createClient } from 'redis';
import { logger } from './logger';

const connectRedis = async (url: string) => {
    const client = createClient({
        url
    });

    client.on('error', (err) => logger.error(`Redis error: ${err}`));

    await client.connect();
    return client;
}
export default connectRedis;
//redis client instance

import { env } from "./env"

import connectRedis from "./connectRedis";
const url = env.redisUrl!;

const client = connectRedis(url);

export default client;
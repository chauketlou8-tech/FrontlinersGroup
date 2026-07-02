import dotenv from "dotenv";
import path from "path"

dotenv.config({
    path: path.join(__dirname, "../../.env"),
});

const port = process.env.PORT || 3002;
const dbUrl = process.env.DATABASE_URL;
const redisUrl = process.env.REDIS_URL;
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;
const email_user = process.env.EMAIL_USER;
const email_password = process.env.EMAIL_PASSWORD;
const node_env = process.env.NODE_ENV;

if (!dbUrl && node_env === "development") {
    throw new Error("Database url is missing");
}

if (!redisUrl && node_env === "development") {
    throw new Error("Redis url is missing");
}

if (!JWT_SECRET && node_env === "development") {
    throw new Error("jwt secrete is missing");
}

if (!JWT_REFRESH_SECRET && node_env === "development") {
    throw new Error("jwt refresh secrete is missing");
}

if (!email_user && node_env === "development") {
    throw new Error("Email user is missing");
}

if (!email_password && node_env === "development") {
    throw new Error("Email password is missing");
}

if (!process.env.NODE_ENV && node_env === "development") {
    throw new Error("node environment is missing");
}

export const env = {
    port,
    dbUrl,
    redisUrl,
    JWT_SECRET,
    JWT_REFRESH_SECRET,
    email_user,
    email_password,
    node_env,
};
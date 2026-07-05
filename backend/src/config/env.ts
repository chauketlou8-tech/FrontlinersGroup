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
const whatsApp_token = process.env.WHATSAPP_TOKEN;
const whatsApp_phone_id = process.env.WHATSAPP_PHONE_ID;
const sms_basic_auth = process.env.SMS_BASIC_AUTH;
const node_env = process.env.NODE_ENV;

if (!process.env.NODE_ENV) {
    throw new Error("node environment is missing");
}

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

if (!whatsApp_token && node_env === "development") {
    throw new Error("whatsApp token is missing");
}

if (!whatsApp_phone_id && node_env === "development") {
    throw new Error("whatsApp phone id is missing");
}

export const env = {
    port,
    dbUrl,
    redisUrl,
    JWT_SECRET,
    JWT_REFRESH_SECRET,
    email_user,
    email_password,
    whatsApp_token,
    whatsApp_phone_id,
    node_env,
    sms_basic_auth,
};
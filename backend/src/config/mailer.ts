//transporter for nodemailer

import * as nodemailer from "nodemailer";
import { env } from "./env";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: env.email_user as string,
        pass: env.email_password as string
    }
});

export default transporter;
import { env } from "../../config/env";
import { logger } from "../../config/logger";
import transporter from "../../config/mailer";
import type { Admin } from "../../types/Admin"

async function sendEmail(to: Admin, subject: string, text: string) {
    if (!to) return;

    try{
        await transporter.sendMail({
            from: env.email_user,
            to: to.email,
            subject: subject,
            text: text
        });

        logger.info(`Successfully sent email to admin ${to.name}!`);
    }
    catch(err){
        logger.error(`Error sending email to admin ${to.name}!`, { error: err });
    }
}

export default sendEmail;
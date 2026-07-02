import { env } from "../../config/env";
import { logger } from "../../config/logger";
import transporter from "../../config/mailer";
import type { Student } from "../../types/Student"

async function sendEmail(to: Student, subject: string, text: string) {
    try{
        if (!to.contactDetails.email) {
            return logger.warn(`${to.name} has no email address.`);
        }

        await transporter.sendMail({
            from: env.email_user,
            to: to.contactDetails.email,
            subject: subject,
            text: text
        });

        logger.info(`Successfully sent email to ${to.name}!`);
    }
    catch(err){
        logger.error(`Error sending email to ${to.name}!`, { error: err });
    }
}

export default sendEmail;
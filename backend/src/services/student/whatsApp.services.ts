import axios from "axios";
import { logger } from "../../config/logger";
import { env } from "../../config/env";
import type { Student } from "../../types/Student";

async function sendWhatsAppMessage(user: Student, message: string) {
    try {
        const url = `https://graph.facebook.com/v17.0/${env.whatsApp_phone_id}/messages`;
        await axios.post(
            url,
            {
                messaging_product: "whatsapp",
                to: user.contactDetails.phone,
                type: "text",
                text: {
                    body: message
                }
            },
            {
                headers: {
                    Authorization: `Bearer ${env.whatsApp_token}`,
                    "Content-Type": "application/json"
                }
            }
        );
        logger.info(`WhatsApp message sent successfully to ${user.contactDetails.phone}`);

        return true;
    } catch (error: any) {
        if (error.response?.data?.error?.message?.includes("Recipient not in WhatsApp")) {
            logger.warn(`Number ${user.contactDetails.phone} is not registered with WhatsApp, failed to send whatsApp`);
        } else {
            logger.error("Failed to send WhatsApp message:", {error: error.message});
        }

        return false;
    }
}

export default sendWhatsAppMessage;
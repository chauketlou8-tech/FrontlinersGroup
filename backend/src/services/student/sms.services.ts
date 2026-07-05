import axios from "axios";
import { logger } from "../../config/logger";
import { env } from "../../config/env";

async function sendSMS(phone: string | undefined, message: string) {
    try {

        const response = await axios.post(
            "https://api.bulksms.com/v1/messages",
            {
                to: phone,
                body: message,
            },
            {
                headers: {
                    Authorization: `Basic ${env.sms_basic_auth}`,
                    "Content-Type": "application/json",
                },
            }
        );
        logger.info(`SMS sent: ${JSON.stringify(response.data)}`);
    } catch (err: any) {
        logger.error(`Failed to send SMS: ${err.message}`);
        if (axios.isAxiosError(err)) {
            console.log(err.response?.status);
            console.log(err.response?.data);
        }
    }
}

export default sendSMS;

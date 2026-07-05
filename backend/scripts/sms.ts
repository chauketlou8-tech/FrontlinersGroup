import sendSMS from "../src/services/student/sms.services";

const send = () => {
    const phone = "+27711820749"
    const message = "testing sms sending"

    void sendSMS(phone, message)
}

send()
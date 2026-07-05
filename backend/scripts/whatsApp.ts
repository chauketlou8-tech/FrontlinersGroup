import sendWhatsAppMessage from "../src/services/student/whatsApp.services";

const send = () => {
    const user = {
        phoneNumber: "+27790433094",
        message: "testing whatsApp sender"
    }

    void sendWhatsAppMessage(user)
}

send()
//function to test email sending

import sendEmail from "../src/services/email.services";

const send = () => {
    const users = [
        {
            name: "Tlou Chauke",
            email: "chktlo003@myuct.ac.za"
        },
        {
            name: "Selaelo Mashalane",
            email: "mashalaneselaelo4@gmail.com"
        },
        {
            name: "Tumisang Mahlangu",
            email: "mahlangutumi2007@gmail.com"
        }
    ]

    for (const user of users) {
        //@ts-ignore
        void sendEmail(user, "Testing", "Hello from Elvis");
    }
}

send();
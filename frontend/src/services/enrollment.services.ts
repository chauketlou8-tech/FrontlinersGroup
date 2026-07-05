import axios from "axios";

const enroll = async ({ d }: { d: {
        firstName: string;
        surname: string;
        email: string | null;
        grade: string;
        subject: string;
        phoneNumber: string;
    } }) => {
    const { data } = await axios.post("/api/v1/enrollment", { d });
    return data;
}

export default enroll;
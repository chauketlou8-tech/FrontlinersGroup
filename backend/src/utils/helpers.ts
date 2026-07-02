import crypto from 'crypto';
import { v4 as uuIdv4 } from "uuid";
import bcrypt from "bcryptjs";

class HelperFunctions {

    //this function helps to generate a string for use (e.g. a jwt secrete)
    public static generateRandomString() {
        return crypto.randomBytes(200).toString('hex');
    }

    //function to generate random id's
    public generateRandomID() {
        return uuIdv4();
    }

    //function to hash a password
    public async hashPassword(password: string) {
        const salt = await bcrypt.genSalt(20);
        return await bcrypt.hash(password, salt);
    }

}

export default new HelperFunctions();
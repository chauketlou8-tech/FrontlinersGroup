import crypto from 'crypto';
import { v4 as uuIdv4 } from "uuid";

class HelperFunctions {

    //this function helps to generate a string for use (e.g. a jwt secrete)
    public static generateRandomString() {
        return crypto.randomBytes(200).toString('hex');
    }

    //function to generate random id's
    public static generateRandomID() {
        return uuIdv4();
    }
}
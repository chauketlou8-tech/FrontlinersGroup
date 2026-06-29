import crypto from 'crypto';

//this function helps to generate a string for use (e.g. a jwt secrete)
const generateStr = () => {
    return crypto.randomBytes(200).toString('hex');
}
console.log(generateStr());
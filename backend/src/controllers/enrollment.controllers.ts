import connectDB from "../config/db"
import asyncHandler from "../middleware/AsyncHandler"
import type { req, res } from "../types/express"
import HelperFunctions from "../utils/helpers"
import Response from "../utils/response"
import { logger } from "../config/logger";
import sendEmail from "../services/student/email.services";
import sendWhatsAppMessage from "../services/student/whatsApp.services";
import sendSMS from "../services/student/sms.services";
import { env } from "../config/env";
import type { Student } from "../types/Student";

const pool = connectDB(env.dbUrl!);

const enroll = asyncHandler(async (req: req, res: res) => {
    const { name, surname, grade, subject, phoneNumber, email } = req.body;

    const fullName = `${name} ${surname}`;
    const phone = phoneNumber.replace(/^0/, "+27").split(" ").join("");
    const subjects = HelperFunctions.formatSubjects(subject)

    //record the student
    const contactResult = await pool.query(`insert into contactdetails(phone, email) values($1, $2) returning *`, [phone, email]);
    const contactDetails = contactResult.rows[0];

    const studentResult = await pool.query(`insert into students(name, grade, subjects, contactdetailsid) values($1, $2, $3, $4) returning *`, [fullName, grade, subjects, contactDetails.id]);
    const student: Student = studentResult.rows[0];

    logger.info(`Successfully created student ${student.id}, name: ${student.name}`);

    //sign them up for an enrollment
    const result = await pool.query(`insert into enrollments(studentid, subjects, grade) values($1, $2, $3) returning *`, [student.id, subjects, grade]);
    const enrollment = result.rows[0];

    logger.info(`Enrollment ${enrollment.uuid} created for ${student.name}`);

    if (student.contactDetails.email) {
        const email_message = `
            Hello ${student.name},

            Welcome to Frontliners Group! We’re excited to have you on board. Your enrollment has been successfully completed, and you’re now part of our growing community.
            
            Here’s what you can expect next:
            - Access to your selected subjects and resources
            - Guidance from our team to help you get started
            - Ongoing support throughout your journey
            
            Your enrollment code is: ${enrollment.uuid}
            
            We’re committed to making sure you have everything you need to succeed. If you have any questions or need assistance, feel free to reach out to us anytime.
            
            Once again, welcome aboard—we’re glad to have you with us!
            
            Best regards
            The Frontliners Group Team

        `

        const subject = "Welcome to Frontliners Group - Enrollment Confirmed"
        await sendEmail(student, subject, email_message);
    }

    const whatsAppMessage = `
        Hi ${student.name} 
        
        Welcome to Frontliners Group — we’re excited to have you join us.  
        
        Your enrollment has been confirmed ,
        Enrollment code: ${enrollment.uuid}  
        
        You’ll now have access to your selected subjects and resources. Our team is here to guide you and support you every step of the way.  
        
        Glad to have you on board.
    `

    const isSendWhatsApp = await sendWhatsAppMessage(student, whatsAppMessage);

    if (!isSendWhatsApp) {
        const smsMessage = `
            Hi ${student.name}, Frontliners Group: Your registration is confirmed. Questions? Reply to this SMS or call +27-79-043-3094.
        `
        await sendSMS(student.contactDetails.phone, smsMessage);
    }

    return Response.success(res, {
        data: {
            student,
            enrollment,
        }
    })
});

export {
    enroll
}
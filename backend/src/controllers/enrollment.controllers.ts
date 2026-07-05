import prismaClient from "../config/db"
import asyncHandler from "../middleware/AsyncHandler"
import type { req, res } from "../types/express"
import HelperFunctions from "../utils/helpers"
import Response from "../utils/response"
import { logger } from "../config/logger";
import sendEmail from "../services/student/email.services";
import sendWhatsAppMessage from "../services/student/whatsApp.services";
import sendSMS from "../services/student/sms.services";

const enroll = asyncHandler(async (req: req, res: res) => {
    const { name, surname, grade, subject, phoneNumber, email } = req.body;

    const fullName = name + " " + surname;
    const contactDetails = {
        phone: phoneNumber.replace(/^0/, "+27").split(" ").join(""),
        email: email,
    }

    //record the student
    const student = await prismaClient.student.create({
        data: {
            name: fullName,
            grade: grade.toUpperCase(),
            subject: HelperFunctions.formatSubjects(subject),
            contactDetails: {
                create: contactDetails,
            },
        },
        include: {
            contactDetails: true
        }
    });

    logger.info(`Student ${student.id}`);

    //sign them up for an enrollment
    const enrollment = await prismaClient.enrollment.create({
        data: {
            student: {
                connect: {
                    id: student.id
                }
            },
            selectedSubjects: HelperFunctions.formatSubjects(subject),
            grade
        }
    });

    logger.info(`Enrollment ${enrollment.uuid} created for ${student.name}`);

    if (student.contactDetails!.email) {

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
        //@ts-ignore
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
    //@ts-ignore
    const isSendWhatsApp = await sendWhatsAppMessage(student, whatsAppMessage);

    if (!isSendWhatsApp) {
        const smsMessage = `
            Hi ${student.name}, Frontliners Group: Your registration is confirmed. Questions? Reply to this SMS or call +27-79-043-3094.
        `
        await sendSMS(student.contactDetails!.phone, smsMessage);
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
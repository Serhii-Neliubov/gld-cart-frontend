import * as dotenv from "dotenv";

dotenv.config();
import nodemailer from "nodemailer";
import ApiError from "../exceptions/api-error";
import {Logger} from "../util/logger";

class MailService {
    private transporter: nodemailer.Transporter;
    private logger: Logger;

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SMTP_USER as string,
                pass: process.env.SMTP_USER_PASSWORD as string,
            },
        });
        this.logger = new Logger();
    }

    async sendContactMail(name: string, email: string, subject: string, message: string) {
        try {
            await this.transporter.sendMail({
                from: "GLDCart Feedback",
                to: process.env.FEEDBACK_EMAIL,
                subject: subject,
                text: `My name is: ${name}. My email is: ${email}. ${message}`,
            });
            this.logger.logInfo(`Email was sent to ${process.env.FEEDBACK_EMAIL}`);
        } catch (error: any) {
            this.logger.logError('Failed to send contact email', error);
            throw ApiError.BadRequest("Failed to send email");
        }
    }

    async sendResetPasswordMail(email: string, link: string) {
        await this.transporter.sendMail({
            from: "GLDCart",
            to: email,
            subject: "Password reset on GLDCart.com",
            html: `<!DOCTYPE html>
           <html lang="en">
           <head>
           <meta charset="UTF-8">
           <title>Password Reset</title>
           </head>
           <body>
           <p>Hello,</p>
           <p>You have requested to reset your password. To reset your password, please click on the following link:</p>
           <p><a href="${link}">Reset Password</a></p>
           <p>If you did not request a password reset, please ignore this email.</p>
           <p>Thank you!</p>
           </body>
           </html>
`,
        });
        this.logger.logInfo('Reset password email was sent');
    }
}

export default new MailService();

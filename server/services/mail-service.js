const nodemailer = require("nodemailer");
require("dotenv").config();
class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_USER_PASSWORD,
      },
    });
  }
  async sendContactMail(name, email, subject, message, to) {
    await this.transporter.sendMail({
      from: "GLDCart Feedback",
      to: to,
      subject: subject,
      text: `My name is: ${name}. My email is: ${email}. ${message}`,
    });
  }
  async sendResetPasswordMail(email, link) {
    await this.transporter.sendMail({
      from: "GLDCart",
      to: email,
      subject: "Password reset on GLDCart.com",
      html: `<!DOCTYPE html>
           <html>
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
  }
}

module.exports = new MailService();

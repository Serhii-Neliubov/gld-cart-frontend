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
}
module.exports = new MailService();

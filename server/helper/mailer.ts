import nodemailer from "nodemailer";
import { handleError } from "../error/handleError";
import { Response } from "express";

const HOST: string = String(process.env.SMTP_HOST);
const PORT: number = Number(process.env.SMTP_PORT);
const MAIL: string = String(process.env.SMTP_MAIL);
const PASSWORD: string = String(process.env.SMTP_PASSWORD);

const transporter = nodemailer.createTransport({
  host: HOST,
  port: PORT,
  secure: false,
  requireTLS: false,
  auth: {
    user: MAIL,
    pass: PASSWORD,
  },
});

const sendMail = async (
  email: string,
  subject: string,
  content: string,
  res: Response
) => {
  try {
    const mailOptions = {
      from: MAIL,
      to: email,
      subject: subject,
      html: content,
    };

    const mail = await transporter.sendMail(mailOptions);

  } catch (err) {
    console.log("error while sending mail");
    handleError(err, res);
  }
};

export { sendMail };

// mailService.ts
import nodemailer from "nodemailer";
import winston from "winston";

const logger = winston.createLogger({
  level: "debug",
  format: winston.format.json(),
  transports: [new winston.transports.Console()]
});

export const sendMail = (
  from: string,
  to: string,
  subject: string,
  html: string,
  userCredentials?: { user?: string; pass?: string }
): Promise<any> => {
  return new Promise((resolve, reject) => {
    let sender: string;
    let password: string;
    
    // Only use userCredentials if both user and pass are provided.
    if (userCredentials && userCredentials.user && userCredentials.pass) {
      sender = userCredentials.user;
      password = userCredentials.pass;
    } else {
      sender = process.env.NEXT_PUBLIC_MAIL_USERNAME || "";
      password = process.env.NEXT_PUBLIC_MAIL_PASSWORD || "";
    }
    
    // Validate that credentials are available.
    if (!sender || !password) {
      return reject(new Error("Missing email credentials"));
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: sender,
        pass: password,
      },
      secure: true,
      port: 465,
    });

    const mailOptions = {
      from: from,
      to: to,
      subject: subject,
      html: html,
    };

    logger.info(`Sending mail to - ${to} using sender: ${sender}`);
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        logger.error(error);
        return reject(error);
      } else {
        logger.info("Email sent: " + info.response);
        return resolve(info);
      }
    });
  });
};

import nodemailer from "nodemailer";

type MailData = {
  from: string;
  subject: string;
  body: string;
};
export const sendEmail = (
  data: MailData
): Promise<nodemailer.SentMessageInfo> => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  return new Promise((resolve, reject) => {
    transporter.sendMail(
      {
        from: data.from,
        to: process.env.MAIL_TO,
        subject: data.subject,
        text: data.body,
      },
      (error, info) => {
        if (error) {
          reject(error);
        } else {
          resolve(info);
        }
      }
    );
  });
};

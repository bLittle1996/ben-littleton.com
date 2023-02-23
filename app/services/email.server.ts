import nodemailer from "nodemailer";

export type MailData = {
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
        from: data.from, // with gmail, this is always the SMTP_USER we logged in as.
        to: process.env.MAIL_TO,
        subject: "From benlittleton.ca: " + data.subject,
        text: `${data.body}\n\nSent by: ${data.from}`,
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

import nodemailer from "nodemailer" 
import  dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()


console.log(process.env.EMAIL_SENDER_PASS);

const sendEmail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_SENDER_ACC,
        pass: process.env.EMAIL_SENDER_PASS,
      },
    });
    console.log("host ", process.env.EMAIL_HOST);
    console.log("port ",process.env.EMAIL_PORT);
    console.log("user ",process.env.EMAIL_SENDER_ACC);
    console.log("pass ",process.env.EMAIL_SENDER_PASS);


    await transporter.sendMail({
      from: process.env.EMAIL_SENDER_ACC,
      to: email,
      subject: subject,
      text: text,
    });
    console.log("email sent sucessfully");
  } catch (error) {
    console.log("email not sent");
    console.log(error);
  }
};

export {sendEmail};
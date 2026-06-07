
// const nodemailer = require("nodemailer")
// const dotEnv = require("dotenv")

// dotEnv.config()

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//  port: 465,
// secure: true,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASSWORD,
//   },
// });


// exports.sendOtpEmail = async (email, otp) => {
//   try {
//     const info = await transporter.sendMail({
//       from: `"OTP Verification" <${process.env.EMAIL_USER}>`,
//       to: email,
//       subject: "Your OTP code",
//       html: `<h2>Your OTP is: ${otp}</h2><p>Valid for 5 minutes</p>`
//     });

//     console.log("Email sent:", info.response);

//   } catch (error) {
//     console.error("FULL ERROR:", error);  
//     throw error;
//   }
// };


// exports.sendOtpEmail = async(email, otp)=>{
//    await transporter.sendMail({
//     from: `"OTP Verification" <${process.env.EMAIL_USER}>`,
//     to: email,
//     subject: "Your OTP code",
  
//     html: `<h2> Your OTP is: ${otp} </h2> <p> Valid for 5 minutes </p> `
//   });
// }



const nodemailer = require("nodemailer");
const dotEnv = require("dotenv");

dotEnv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Add here
transporter.verify((err, success) => {
  if (err) {
    console.error("SMTP Verify Error:", err);
  } else {
    console.log("SMTP Ready");
  }
});

exports.sendOtpEmail = async (email, otp) => {
  try {
    const info = await transporter.sendMail({
      from: `"OTP Verification" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your OTP code",
      html: `<h2>Your OTP is: ${otp}</h2><p>Valid for 5 minutes</p>`
    });

    console.log("Email sent:", info.response);

  } catch (error) {
    console.error("FULL ERROR:", error);
    throw error;
  }
};
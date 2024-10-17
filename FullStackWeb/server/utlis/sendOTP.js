const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
// console.log(process.env.SERVICES, process.env.HOST, process.env.HOSTPASS);
async function sendmail(email, htmltemplate) {
  let transporter = nodemailer.createTransport({
    service: process.env.SERVICES,
    auth: {
      user: process.env.HOST,
      pass: process.env.HOSTPASS,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: process.env.HOST,
      to: email,
      subject: "Verification",
      html: htmltemplate,
    });
    console.log("message sent : %s");
  } catch (error) {
    console.log(error);
  }
}
// sendmail(4444);
module.exports = sendmail;

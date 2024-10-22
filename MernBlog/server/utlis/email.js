const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  service: "gmail",
  auth: {
    user: "maddison53@ethereal.email",
    pass: "jn7jnAPss4f63QBp6D",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function Sendmail(email, htmltemplate) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: "solnupur999@gmail.com", // sender address
    to: email, // list of receivers
    subject: "Verification ✔", // Subject line
    html: htmltemplate, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

module.exports = Sendmail;

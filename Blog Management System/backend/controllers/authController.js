const otpGenerator = require("otp-generator");
const ejs = require("ejs");
var jwt = require("jsonwebtoken");
const sendmail = require("../utilis/sendOTP");
const bcrypt = require("bcrypt");
const UserModel = require("../models/user");

const user_register_controller = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
      lowerCaseAlphabets: false,
    });

    var varificationToken = jwt.sign(
      { name, email, password, otpGen: otp },
      process.env.privateKey
    );

    console.log(otp, varificationToken);
    const htmltemplate = await ejs.renderFile(
      __dirname + "/../views/email.ejs",
      {
        otp,
        name,
      }
    );
    await sendmail(email, htmltemplate);
    // res.send({ message: "email sent successfully", varificationToken });
    res
      .cookie("varificationToken", varificationToken)
      .json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(400).json({ message: error?.message });
  }
};

const verification_contoller = (req, res) => {
  const { otp } = req.body;
  //   const Token = req.headers?.varificationtoken;
  const { varificationToken } = req.cookies;
  //   console.log(Token);
  //   var decoded = jwt.verify(varificationToken, process.env.privateKey);

  //   console.log(decoded);
  // console.log(otp);
  //   res.send("ok");
  var { otpGen, name, email, password } = jwt.verify(
    varificationToken,
    process.env.privateKey
  );
  if (!otp) {
    return res.status(400).json({ message: "please enter otp" });
  }

  if (otpGen !== otp) {
    return res.status(400).json({ message: "Invalid OTP" });
  }

  bcrypt.hash(password, 5, async function (err, hash) {
    if (err) {
      return res.status(400).json({ message: err.message });
    } else {
      await UserModel.create({ name, email, password: hash });
      res.json({ message: "user cerated successfully" });
    }
  });
};

const login_controller = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  bcrypt.compare(password, user.password, function (err, result) {
    if (err) {
      return res.status(400).json({ message: err.message });
    } else {
      //   console.log(result);
      //   res.json({ message: "user id login" });
      if (result) {
        const token = jwt.sign({ email }, process.env.privateKey);
        res
          .cookie("accessToken", token)
          .json({ message: "Login Successfully" });
      } else {
        res.json("Incorrect password");
      }
    }
  });
};

const userdata_by_admin = async (req, res) => {
  const user = await UserModel.find({ email });
  console.log(user);
  res.send();
};

module.exports = {
  user_register_controller,
  verification_contoller,
  login_controller,
  userdata_by_admin,
};

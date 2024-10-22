const otpGenerator = require("otp-generator");

const OtpGeneratorfun = () => {
  const otp = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
    digits: true,
  });
  return otp;
};

module.exports = OtpGeneratorfun;

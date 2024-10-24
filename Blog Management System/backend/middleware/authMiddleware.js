const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const UserModel = require("../models/user");
const Auth_middleware = async (req, res, next) => {
  const access_token = req.cookies.accessToken;
  // console.log(access_token);
  if (!access_token) {
    return res.status(401).json({ error: "please login to creste a note." });
  }

  jwt.verify(
    access_token,
    process.env.privateKey,
    async function (err, decoded) {
      if (err) {
        return res.status(401).json({ error: "invalid token" });
      } else {
        const { email } = decoded;
        const user = await UserModel.findOne({ email });
        req.user = user;
        next();
      }
    }
  );
};

module.exports = Auth_middleware;

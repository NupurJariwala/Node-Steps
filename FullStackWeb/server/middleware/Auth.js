const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const UserModel = require("../models/userModel");
const Auth_middleware = async (req, res, next) => {
 
  const token = req?.cookies?.accessToken;
  //   console.log(token);
  try {
    const { email } = jwt.verify(token, process.env.privateKey);
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    } else {
      req.user = user;
      next();
    }
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = Auth_middleware;

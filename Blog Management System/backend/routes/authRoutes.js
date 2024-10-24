const express = require("express");

const userRoutes = express.Router();
const dotenv = require("dotenv");
dotenv.config();

const {
  user_register_controller,
  verification_contoller,
  login_controller,
} = require("../controllers/authController");
userRoutes.post("/register", user_register_controller);

userRoutes.post("/verification", verification_contoller);

userRoutes.post("/login", login_controller);
userRoutes.get("/logout", (req, res) => {
  res.clearCookie("accessToken").json({ message: "logout successfully" });
});

module.exports = userRoutes;

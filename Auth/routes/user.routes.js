const express = require("express");

const UserRouter = express.Router();

const dotenv = require("dotenv");
const {
  getalluserdata,
  registrationcontroller,
  logincontoller,
} = require("../controllers/user.controller");

dotenv.config();

//###   Get All User Routes
UserRouter.get("/alluserdata", getalluserdata);

//###   Get registration Routes
UserRouter.post("/add", registrationcontroller);

//###   Get login Routes
UserRouter.post("/login", logincontoller);

module.exports = UserRouter;

const express = require("express");
const { Signup } = require("../controllers/user.controller");

const UserRouter = express.Router();

UserRouter.post("/signup", Signup);

module.exports = UserRouter;

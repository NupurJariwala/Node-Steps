const express = require("express");
const UserModel = require("../models/user.model");
const UserRouter = express.Router();

// ###Registration Routes ###

UserRouter.post("/add", async (req, res) => {
  //   console.log(req.body);
  const { name, email, password } = req.body;
  console.log(name);

  try {
    const singleuser = new UserModel({ name, email, password });
    await singleuser.save();
    res.status(200).json({ message: "user created successfully" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

UserRouter.post("/login", (req, res) => {
  const { email, password } = req.body;
  try {
    const matchuser = UserModel.find({ email });
    console.log(matchuser);
    res.status(200).json({ message: "ok" });
  } catch (error) {
    res.status(400).json({ message: "error" });
  }
});
module.exports = UserRouter;

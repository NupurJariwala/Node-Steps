const express = require("express");
const UserModel = require("../models/user.model");
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
console.log(process.env.SECRET_KEY);

//###   Get All User Contoller
const getalluserdata = async (req, res) => {
  try {
    const alluserdata = await UserModel.find();
    res.status(200).json({ userdata: alluserdata });
  } catch (error) {
    res.status(400).json({ message: "Error fetching users" });
  }
};

// ###Registration Routes ###
const registrationcontroller = (req, res) => {
  //   console.log(req.body);
  const { name, email, password } = req.body;
  console.log(name, email, password);

  try {
    bycrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        return res.status(500).json({ message: "Error in hashing password" });
      } else {
        const singleuser = new UserModel({ name, email, password: hash });
        await singleuser.save();
        res.status(200).json({ message: "user created successfully" });
      }
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

const logincontoller = async (req, res) => {
  const { email, password } = req.body;
  try {
    const matchuser = await UserModel.findOne({ email });
    console.log(matchuser);
    const hashpassword = matchuser.password;
    bycrypt.compare(password, hashpassword, function (err, result) {
      if (result) {
        // res
        //   .status(200)
        //   .json({ message: "Login Successfully", user: matchuser });
        jwt.sign(
          { matchuser },
          process.env.SECRET_KEY,
          { expiresIn: 20 },
          function (err, token) {
            if (err) {
              res.status(500).json({ message: "Error in generating token" });
            } else {
              res
                .status(200)
                .json({ message: "Login Successfully", token: token });
            }
          }
        );
      } else {
        res.status(400).json({ message: "Invalid Email or Password" });
      }
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
module.exports = { getalluserdata, registrationcontroller, logincontoller };

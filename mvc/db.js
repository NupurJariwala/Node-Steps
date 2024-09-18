const mongoose = require("mongoose");
const connection = mongoose.connect("mongodb://127.0.0.1:27017/nupurDB");

//schema ->Blue Print
const userScheme = new mongoose.Schema({
  name: String,
  age: Number,
  city: String,
});

const UserModel = mongoose.model("user", userScheme);
module.exports = { connection, UserModel };

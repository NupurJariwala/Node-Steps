const mongoose = require("mongoose");

const userschema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "user" },
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("user", userschema);
module.exports = UserModel;

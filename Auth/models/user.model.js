const mongoose = require("mongoose");
//### UserSchema ###
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// #### Model ###
const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;

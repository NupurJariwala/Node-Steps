const mongoose = require("mongoose");
const connection = mongoose.connect("mongodb://127.0.0.1:27017/multer");

const fileschema = new mongoose.Schema({
  filename: String,
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

const filemodel = mongoose.model("userprofile", fileschema);

module.exports = { filemodel, connection };

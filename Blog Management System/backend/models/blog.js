const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: false },
  content: { type: String },
  tags: [String],
  publishedDate: {
    type: String,
    default: new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
  },
  userId: String,
  userName: String,
});

const blogsModel = mongoose.model("Blog", BlogSchema);
module.exports = blogsModel;

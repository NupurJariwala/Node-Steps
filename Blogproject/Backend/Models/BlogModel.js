const mongoose = require("mongoose");
const blogsSchema = new mongoose.Schema({
  userName: String,
  title: { type: String },
  author: { type: String },
  content: { type: String },
  tags: [String],
  publishedDate: {
    type: Date,
    default: Date().toLocaleString("en-Us", { timeZone: "Asia/Kolkata" }),
  },
});
const BlogModel = mongoose.model("blogs", blogsSchema);

module.exports = BlogModel;

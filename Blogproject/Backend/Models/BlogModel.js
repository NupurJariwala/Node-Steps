const mongoose = require("mongoose");
const blogsSchema = new mongoose.Schema({
  userName: String,
  title: { type: String },
  author: { type: String },
  content: { type: String },
  tags: [String],
  publishedDate: { type: Date, default: Date.now },
});
const BlogModel = mongoose.model("blogs", blogsSchema);

module.exports = BlogModel;

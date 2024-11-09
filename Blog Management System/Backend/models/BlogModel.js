const mongoose = require("mongoose");
const blogsSchema = new mongoose.Schema({
  userName: String,
  title: { type: String },
  author: { type: String },
  content: { type: String },
  tags: [String],
  publishedDate: {
    type: String,
    default: new Date().toLocaleString(),
  },
  userId: String,
});
const BlogModel = mongoose.model("blogs", blogsSchema);

module.exports = BlogModel;

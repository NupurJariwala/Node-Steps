const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: false },
  content: { type: String, required: true },
  tags: [String],
  publishedDate: {
    type: String,
    default: new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
  },
});

const blogsModel = mongoose.model("Blog", BlogSchema);
module.exports = blogsModel;

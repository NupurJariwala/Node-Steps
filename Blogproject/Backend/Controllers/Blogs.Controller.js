const BlogsModel = require("../Models/BlogModel");
// const dotenv = require("dotenv");
// dotenv.config();

const BlogsCreateController = async (req, res) => {
  const { title, author, content, tags } = req.body;
  try {
    // console.log(req.user);
    await BlogsModel.create({
      userName,
      title,
      author,
      content,
      tags,
    });
    res.status(201).json({ message: "Note created successfully" });
  } catch (error) {
    res.status(400).json({ message: "something went to wrong " });
  }
};

module.exports = { BlogsCreateController };

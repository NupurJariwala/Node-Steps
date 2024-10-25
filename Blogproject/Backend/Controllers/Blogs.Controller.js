const BlogsModel = require("../Models/BlogModel");
// const dotenv = require("dotenv");
// dotenv.config();

const BlogsCreateController = async (req, res) => {
  //   console.log(req.body);
  const { userName, title, author, content, tags } = req.body;
  try {
    // console.log(req.body);
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

const AllBlogs = async (req, res) => {
  try {
    const data = await BlogsModel.find();
    if (!data || data.length == 0) {
      return res.status(404).json({ message: "data not found" });
    }
    res
      .status(200)
      .json({ message: "All Notes fetched successfully", blogs: data });
  } catch (error) {
    res.status(400).json({ message: "something went to wrong" });
  }
};

const BlogDetails = async (req, res) => {
  // console.log(req.params)
  const { id } = req.params;
  try {
    const data = await BlogsModel.find({ _id: id });
    // console.log(data);
    res.send(data);
  } catch (error) {
    res.status(400).json({ message: "something went to wrong" });
  }
};

module.exports = { BlogsCreateController, AllBlogs, BlogDetails };

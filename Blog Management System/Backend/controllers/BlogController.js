const dotenv = require("dotenv");
const BlogModel = require("../models/BlogModel");

dotenv.config();
const blogsCreateController = async (req, res) => {
  const { title, author, content } = req.body;
  try {
    console.log(req.user);
    await BlogModel.create({
      title,
      author,
      content,
      userId: req.user?._id,
      userName: req.user?.name,
    });
    res.status(201).json({ message: "Blog created successfully" });
  } catch (error) {
    res.status(400).json({ message: "something went to wrong " });
  }
};

const user_delete_controller = async (req, res) => {
  const { id } = req.params;
  const userid = req.user._id;

  try {
    const data = await BlogModel.findOne({ userId: userid, _id: id });
    console.log(data);
    if (!data) {
      return res.status(404).json({ message: "please login" });
    }
    await BlogModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Blog deleted successfully" });
    // res.send("ok");
  } catch (error) {
    res.status(400).json({ message: "something went to wrong" });
  }
};

const user_update_controller = async (req, res) => {
  const { id } = req.params;
  const userid = req.user._id;
  const { title, author, content, tags } = req.body;
  try {
    const data = await BlogModel.findOne({ userId: userid, _id: id });
    console.log(data);
    if (!data) {
      return res.status(404).json({ message: "please login" });
    }
    await BlogModel.findByIdAndUpdate(id, { ...req.body });

    res.status(200).json({ message: "Blog update successfully" });
    // res.send("ok");
  } catch (error) {
    res.status(400).json({ message: "something went to wrong" });
  }
};

const user_blogs_controller = async (req, res) => {
  const userid = req.user?._id;

  try {
    const data = await BlogModel.find({ userId: userid });
    // console.log(data);
    if (!data) {
      return res.status(404).json({ message: "data not found" });
    }
    res.status(200).json({ message: "All Blogs are here.... ", Blogs: data });
    // res.send("ok");
  } catch (error) {
    res.status(400).json({ message: "something went to wrong" });
  }
};

const Delete_All_By_Admin = async (req, res) => {
  try {
    await BlogModel.deleteMany();
    res.status(200).json({ message: "All Blogs Are Deleted" });
  } catch (error) {
    res.status(400).json({ message: "something went to wrong" });
  }
  y;
};

const GetAllBlogs_By_AdminController = async (req, res) => {
  try {
    const data = await BlogModel.find();
    if (!data || data.length == 0) {
      return res.status(404).json({ message: "data not found" });
    }
    res
      .status(200)
      .json({ message: "All Blogs fetched successfully", Blogs: data });
  } catch (error) {
    res.status(400).json({ message: "something went to wrong" });
  }
};

module.exports = {
  blogsCreateController,
  user_delete_controller,
  user_update_controller,
  user_blogs_controller,
  Delete_All_By_Admin,
  GetAllBlogs_By_AdminController,
};

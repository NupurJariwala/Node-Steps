const blogsModel = require("../models/blog");
const dotenv = require("dotenv");

dotenv.config();
// Create  blog

const createBlog = async (req, res) => {
  const { title, author, content, tags } = req.body;
  console.log(req.user);
  try {
    await blogsModel.create({
      title,
      author,
      content,
      tags,
      userId: req.user?._id,
      userName: req.user?.name,
    });

    // res.send("ok");
    return res.status(200).json({ message: "Blog created successfully" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Delete blog
const deleteBlog = async (req, res) => {
  // console.log(req.params);
  const { id } = req.params;
  const userid = req.user?._id;
  // console.log(id, userid);
  try {
    const blogsdata = await blogsModel.findOne({
      userId: userid,
      _id: id,
    });
    console.log(blogsdata);
    if (!blogsdata) {
      return res.status(404).json({ message: "please login" });
    }
    await blogsModel.findByIdAndDelete(id);
    return res.status(200).json({ message: "Note deleted successfully" });
    // res.send("ok");
  } catch (error) {
    return res.status(400).json({ message: "something went to wrong" });
  }
};

//delete all by admin

const deleteallBlog = async (req, res) => {
  // const userRole = req.user;
  const { role } = req.user;
  // console.log(userRole);
  try {
    if (role != admin) {
      return res.status(401).json({ message: "you are not authorized" });
    }
    await blogsModel.deleteMany();
    return res.status(200).json({ message: "all blogs deleted" });
    // res.send("ok");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

//getblogbyID
const getBlogById = async (req, res) => {
  console.log(req.user);
  const { role } = req.user;
  console.log(role);
  const { id } = req.params;
  const userid = req.user?._id;
  console.log(id, userid);
  try {
    const blogsdata = await blogsModel.find({
      userId: userid,
    });
    // console.log(blogsdata);
    // if (!blogsdata || blogsdata.length == 0) {
    //   return res.status(404).json({ message: "data not found" });
    // }
    await blogsModel.find();
    return res
      .status(200)
      .json({ message: "All Notes fetched successfully", blogs: blogsdata });
    // res.send("ok");
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

// Update blog
const updateBlog = async (req, res) => {
  const { id } = req.params;
  const userid = req.user?._id;
  console.log(id, userid);
  const { title, author, content, tags } = req.body;
  try {
    const blogsdata = await blogsModel.findOne({ userId: userid, _id: id });
    console.log(blogsdata);
    if (!blogsdata) {
      return res.status(404).json({ message: "please login" });
    }
    await blogsModel.findByIdAndUpdate(id, { ...req.body });

    return res.status(200).json({ message: "Note update successfully" });
    // res.send("ok");
  } catch (error) {
    return res.status(400).json({ message: "something went to wrong" });
  }
};

// // Get all blogs
const getAllBlogs = async (req, res) => {
  const { role } = req.user;
  const blogsdata = await blogsModel.find();
  try {
    if (!blogsdata || blogsdata.length == 0) {
      return res.status(404).json({ message: "data not found" });
    }
    await blogsModel.find();
    return res
      .status(200)
      .json({ message: "All Notes fetched successfully", blogs: blogsdata });
    // res.send("ok");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

module.exports = {
  createBlog,
  deleteBlog,
  getBlogById,
  updateBlog,
  getAllBlogs,
  deleteallBlog,
};

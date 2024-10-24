const blogsModel = require("../models/blog");

// Create  blog
const createBlog = async (req, res) => {
  const { title, author, content, tags } = req.body;
  try {
    await blogsModel.create({
      title,
      author,
      content,
      tags,
    });
    res.status(200).json({ message: "Blog created successfully" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
};

// Delete blog
const deleteBlog = async (req, res) => {
  try {
    await blogsModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Blog deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get blog by ID
const getBlogById = async (req, res) => {
  try {
    const blog = await blogsModel.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update blog
const updateBlog = async (req, res) => {
  try {
    const updatedBlog = await blogsModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedBlog)
      return res.status(404).json({ message: "Blog not found" });
    res.status(200).json(updatedBlog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogsModel.find();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createBlog,
  deleteBlog,
  getBlogById,
  updateBlog,
  getAllBlogs,
};

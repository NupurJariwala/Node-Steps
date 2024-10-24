const express = require("express");
const {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controller/blogController");

const router = express.Router();

// Get all blogs
router.get("/", getAllBlogs);

// Get a blog by ID
router.get("/:id", getBlogById);

// Create a new blog
router.post("/create", createBlog);

// Update a blog by ID
router.patch("/update/:id", updateBlog);

// Delete a blog by ID
router.delete("/delete/:id", deleteBlog);

module.exports = router;

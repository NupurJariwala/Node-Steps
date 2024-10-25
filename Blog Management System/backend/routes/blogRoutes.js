const express = require("express");
const {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  deleteallBlog,
} = require("../controllers/blogController");
const roleValidator = require("../middleware/roleMiddleware");
const Auth_middleware = require("../middleware/authMiddleware");
const userValidator = require("../middleware/userMiddleware");

const router = express.Router();
//middleware
router.use(Auth_middleware);
// Get all blogs
router.get("/allblogs", roleValidator, getAllBlogs); //admin

// Get a blog by ID
router.get("/blog", userValidator, getBlogById);

// Create a new blog
router.post("/create", createBlog);

// Update a blog by ID
router.patch("/update/:id", updateBlog);

// Delete a blog by ID
router.delete("/delete/:id", deleteBlog);

// Delete by admin
router.delete("/deleteall", deleteallBlog); //admin

module.exports = router;

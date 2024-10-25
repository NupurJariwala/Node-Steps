const express = require("express");
const {
  BlogsCreateController,
  AllBlogs,
} = require("../Controllers/Blogs.Controller");
const BlogsRouter = express.Router();
//create
BlogsRouter.post("/create", BlogsCreateController);
BlogsRouter.get("/allblogs", AllBlogs);

module.exports = BlogsRouter;

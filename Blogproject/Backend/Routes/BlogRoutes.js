const express = require("express");
const {
  BlogsCreateController,
  AllBlogs,
  BlogDetails,
} = require("../Controllers/Blogs.Controller");
const BlogsRouter = express.Router();
//create
BlogsRouter.post("/create", BlogsCreateController);
BlogsRouter.get("/allblogs", AllBlogs);
BlogsRouter.get("/blogdetais/:id", BlogDetails);
module.exports = BlogsRouter;

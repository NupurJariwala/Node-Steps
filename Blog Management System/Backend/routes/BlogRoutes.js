const express = require("express");
const {
  blogsCreateController,
  user_delete_controller,
  user_update_controller,
  user_blogs_controller,
  Delete_All_By_Admin,
  GetAllBlogs_By_AdminController,
} = require("../controllers/BlogController");
const Auth_middleware = require("../middlewares/Auth");
const roleValidator = require("../middlewares/roleValidator");
const BlogsRouter = express.Router();
BlogsRouter.use(Auth_middleware);
BlogsRouter.post("/create", blogsCreateController);
BlogsRouter.delete("/delete/:id", user_delete_controller);
BlogsRouter.patch("/update/:id", user_update_controller);
BlogsRouter.get("/userblogs", user_blogs_controller);
BlogsRouter.delete("/deletebyadmin", roleValidator, Delete_All_By_Admin);
BlogsRouter.get("/allblogs", roleValidator, GetAllBlogs_By_AdminController);
module.exports = BlogsRouter;

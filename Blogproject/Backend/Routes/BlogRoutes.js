const express = require("express");
const BlogsRouter = express.Router();

//create
BlogsRouter.post("/create", BlogsCreateController);

module.exports = BlogsRouter;

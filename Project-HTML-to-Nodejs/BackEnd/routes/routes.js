const express = require("express");
const {
  productsCreateController,
} = require("../controllers/productController");
const Router = express.Router();
//create
Router.post("/create", productsCreateController);

module.exports = Router;

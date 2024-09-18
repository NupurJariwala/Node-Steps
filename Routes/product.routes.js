const express = require("express");

const ProductRoutes = express.Router();
ProductRoutes.get("/getproduct", (req, res) => {
  console.log("Product data");
  res.send("product page");
});

ProductRoutes.put("/addproduct", (req, res) => {
  console.log("Product data");
  res.send("product page");
});

ProductRoutes.patch("/editproduct/:id", (req, res) => {
  console.log("Product data");
  res.send("product page");
});

ProductRoutes.delete("/deleteproduct/:id", (req, res) => {
  console.log("Product data");
  res.send("product page");
});

module.exports = ProductRoutes;

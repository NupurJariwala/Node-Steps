const express = require("express");
const fs = require("fs");
const app = express();
const ProductRoutes = require("./product.routes");

app.use("/product", ProductRoutes);

//pages
app.get("/", (req, res) => {
  console.log("home");
  res.send("home page");
});

app.get("/about", (req, res) => {
  console.log("about");
  res.send("about page");
});

app.get("/contact", (req, res) => {
  console.log("contact");
  res.send("contact page");
});

app.get("/services", (req, res) => {
  console.log("services");
  res.send("services page");
});

//product

//user

app.get("/user", (req, res) => {
  console.log("user data");
  res.send("user data");
});

app.listen("8080", () => {
  console.log("server is running");
});

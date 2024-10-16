const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //   res.send("<h1>Home Page</h1>"); //server side rendering
  res.render("home");
  n;
  res.render("product");
});

app.listen(8080, () => {
  console.log("server is running on port 8080");
});

const express = require("express");
const fs = require("fs");
const app = express();

app.use((req, res, next) => {
  //   console.log("I am from MiddleWare", req.method, req.url);//start time
  const startTime = new Date().getTime();
  console.log(startTime);
  next();
  //   console.log("Bye from MiddleWare ");//end time
  const endTime = new Date().getTime();
  const timeTaken = endTime - startTime;
  console.log(`Time is taken by this request ${timeTaken}ms`);
});

app.get("/", (req, res) => {
  console.log("I am from HomePage");
  res.send(" HomePage");
});

app.get("/blog", (req, res) => {
  console.log("I am from BlogPage");
  res.send("BlogPage");
});

app.get("/contact", (req, res) => {
  console.log("I am from ContactPage");
  res.send("ContactPage");
});

app.get("/product", (req, res) => {
  fs.readFile("./db.json", "utf-8", (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.listen(8080, () => {
  console.log("server is running");
});

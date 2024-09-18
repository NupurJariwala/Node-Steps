const express = require("express");
const fs = require("fs");
const app = express();

//for sequesnce knowledge
// 1 3 I am from Aboutpage 4 2
// app.use((req, res, next) => {
//   console.log("1");
//   next(); //nextmidleware
//   console.log("2");
// });

// app.use((req, res, next) => {
//   console.log("3");
//   next();
//   console.log("4");
// });

//for sequesnce knowledge

app.use((req, res, next) => {
  fs.appendFile(
    "./List.txt",
    `\n EndPoint is ${req.url} & Time is ${new Date()}`,
    (err) => {
      if (err) {
        res.send(err);
      }
    }
  );
  next();
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

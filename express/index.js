// const http = require("http");
// const server = http.createServer((req, res) => {});
// server.listen("8080", () => {
//   console.log("server is running on port 8080");
// });

const express = require("express");
const fs = require("fs");
const app = express();

//home route
app.get("/home", (req, res) => {
  res.end("welcome to home page");
});

//getproduct
app.get("/getproduct", (req, res) => {
  fs.readFile("./db.json", "utf-8", (err, data) => {
    if (err) {
      res.send(err);
    } else {
      console.log(data);
      res.send();
    }
  });
});

app.listen("8080", () => {
  console.log("server is rinning");
});

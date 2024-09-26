const express = require("express");
const jwt = require("jsonwebtoken");
const ContentRouter = express.Router();
const dotenv = require("dotenv");
dotenv.config();

ContentRouter.get("/home", (req, res) => {
  res.send("Welcome to home page");
});

//Private

ContentRouter.get("/movie", (req, res) => {
  //   const { token } = req.query;
  //   console.log(token);
  const { token } = req.headers;
  console.log(req.headers.token);
  //   res.send("ok");
  jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
    if (err) {
      res.status(401).send({ message: "Invalid token" });
    } else {
      //   console.log(decoded);
      if (decoded) {
        res.send("You can Striming Movies");
      } else {
        res.send("You cant Striming Movies");
      }
    }
  });
});

ContentRouter.get("/series", (req, res) => {
  const { token } = req.query;
  jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
    if (err) {
      res.status(401).send({ message: "Invalid token" });
    } else {
      //   console.log(decoded);/
      if (decoded) {
        res.send("You can Striming Movies");
      } else {
        res.send("You cant Striming Movies");
      }
    }
  });
});

module.exports = ContentRouter;

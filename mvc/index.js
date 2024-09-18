const express = require("express");
const { connection } = require("./db"); //destucture of connection
const userRouter = require("./Controllers/user.controller");

const app = express();
app.use(express.json()); //connect with frontend add cors
//user Router
app.use("/user", userRouter); //using MiddleWare

//server running
app.listen(8080, async () => {
  try {
    await connection;
    console.log("server is running on port 8080");
    console.log(">>>>>>>>>>>>>>>>connected to db>>>>>>>>>>>>>>>");
  } catch (error) {
    console.log(error);
  }
});

const express = require("express");
const connection = require("./db");
const UserRouter = require("./controllers/user.controller");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

app.use(express.json());

app.use("/user", UserRouter);

console.log(process.env.PORT);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(`server is running at PORT ${process.env.PORT}`);
    console.log("connected to the db");
  } catch (error) {
    console.log("error");
  }
});

const express = require("express");
const connection = require("./db");
const UserRouter = require("./routes/user.routes");
const dotenv = require("dotenv");
const ContentRouter = require("./controllers/content.controller");
dotenv.config();

const app = express();

app.use(express.json());

app.use("/user", UserRouter);
app.use("/content", ContentRouter);

console.log(process.env.PORT);

app.listen(process.env.PORT || 8080, async () => {
  try {
    await connection;
    console.log(`server is running at PORT ${process.env.PORT}`);
    console.log("connected to the db");
  } catch (error) {
    console.log("error");
  }
});

const express = require("express");
const dotenv = require("dotenv");
const connection = require("./db");
dotenv.config();
const cors = require("cors");
const UserRouter = require("./routes/user.routes");
const app = express();
app.use(cors());
app.use(express.json());

//Routes Part
app.use("/user", UserRouter);

app.listen(process.env.PORT || 3000, async () => {
  try {
    await connection;
    console.log("connected to database");
    console.log(`server is running on port ${process.env.PORT || 3000}`);
  } catch (err) {
    console.log(err);
  }
});

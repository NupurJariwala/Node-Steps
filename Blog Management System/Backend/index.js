const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connection = require("./db");
const cors = require("cors");
const UserRouter = require("./routes/userRoutes");
const cookieParser = require("cookie-parser");
const BlogsRouter = require("./routes/BlogRoutes");
dotenv.config();

app.set("view engine", "ejs");
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/user", UserRouter);
app.use("/blogs", BlogsRouter);
app.listen(process.env.PORT || 3000, async () => {
  try {
    await connection;
    console.log("connected to MongoDB");
    console.log(
      `Server is running on port ${process.env.PORT ? process.env.PORT : 3000}`
    );
  } catch (error) {
    console.log(error);
  }
});

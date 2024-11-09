const express = require("express");
const app = express();
const dotenv = require("dotenv");

const cors = require("cors");
const BooksRouter = require("./Routes/Books.Routes");
const connection = require("./db");
// const cookieParser = require("cookie-parser");

dotenv.config();

app.set("view engine", "ejs");
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
// app.use(cookieParser());
// app.use("/user", UserRouter);
app.use("/books", BooksRouter);
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

const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connection = require("./db");
const cors = require("cors");
const blogRoutes = require("./routes/blogRoutes");
const userRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
dotenv.config();

// Middleware

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Routes
app.use("/blogs", blogRoutes);
app.use("/user", userRoutes);
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

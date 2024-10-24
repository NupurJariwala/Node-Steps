const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connection = require("./db");
const cors = require("cors");
const blogRoutes = require("./routes/blogRoutes");
dotenv.config();

// Middleware

app.use(express.json());
app.use(cors({ origin: "http://localhost:5174", credentials: true }));

// Routes
app.use("/blogs", blogRoutes);

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

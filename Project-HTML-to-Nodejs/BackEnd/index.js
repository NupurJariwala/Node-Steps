const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connection = require("./db");
const cors = require("cors");
const Router = require("./routes/routes");

dotenv.config();

app.set("view engine", "ejs");
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

app.use("/router", Router);

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.post("/contact", (req, res) => {
  res.render("contactform");
});
app.get("/product", (req, res) => {
  res.render("products");
});

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

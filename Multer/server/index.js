const express = require("express");
const cors = require("cors");
const upload = require("./utlis/multer");

const { filemodel, connection } = require("./db");
const app = express();

app.use(cors());
app.use(express.static("./uploads"));

app.post("/upload", upload.single("file"), async (req, res) => {
  // console.log(req.file);
  const { filename } = req.file;
  // console.log(filename);
  try {
    if (!req.file) {
      return res.status(400).json({ message: "please upload a file" });
    }
    await filemodel.create({ filename });
    res.status(201).json({ message: "File Uploaded successfully" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

app.get("/getfiles", async (req, res) => {
  try {
    const filedata = await filemodel.find();
    res.status(200).json(filedata);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

app.listen(8080, async () => {
  try {
    await connection;
    console.log("db is connected");
    console.log("server is running on port 8080");
  } catch (error) {
    console.log(error);
  }
});

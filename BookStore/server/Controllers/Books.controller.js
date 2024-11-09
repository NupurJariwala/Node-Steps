const BooksModel = require("../Models/Book.Model");
// const dotenv = require("dotenv");
// dotenv.config();

const BooksCreateController = async (req, res) => {
  //   console.log(req.body);
  const { userName, title, author, description, tags, ISBN, price, image } =
    req.body;
  try {
    // console.log(req.body);
    await BooksModel.create({
      userName,
      title,
      image,
      author,
      description,
      tags,
      ISBN,
      price,
    });
    res.status(201).json({ message: "Book created successfully" });
  } catch (error) {
    res.status(400).json({ message: "something went to wrong " });
  }
};

const AllBooks = async (req, res) => {
  try {
    const data = await BooksModel.find();
    if (!data || data.length == 0) {
      return res.status(404).json({ message: "data not found" });
    }
    res
      .status(200)
      .json({ message: "All Books fetched successfully", books: data });
  } catch (error) {
    res.status(400).json({ message: "something went to wrong" });
  }
};

const BookDetails = async (req, res) => {
  // console.log(req.params)
  const { id } = req.params;
  try {
    const data = await BooksModel.find({ _id: id });
    // console.log(data);
    res.send(data);
  } catch (error) {
    res.status(400).json({ message: "something went to wrong" });
  }
};

const BookDelete = async (req, res) => {
  // console.log(req.params)
  const { id } = req.params;
  try {
    const data = await BooksModel.findByIdAndDelete({ _id: id });
    // console.log(data);
    res.status(200).json({ message: " Book deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "something went to wrong" });
  }
};

const Bookupdate = async (req, res) => {
  // console.log(req.params)
  const { id } = req.params;
  const { userName, title, author, description, tags, ISBN, price, image } =
    req.body;
  try {
    await BooksModel.findByIdAndUpdate(id, { ...req.body });

    res.status(200).json({ message: "Book update successfully" });
    // res.send("ok");
  } catch (error) {
    res.status(400).json({ message: "something went to wrong" });
  }
};

module.exports = {
  BooksCreateController,
  AllBooks,
  BookDetails,
  BookDelete,
  Bookupdate,
};

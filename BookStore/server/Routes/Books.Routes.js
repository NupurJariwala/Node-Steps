const express = require("express");
const {
  BooksCreateController,
  AllBooks,
  BookDetails,
  BookDelete,
  Bookupdate,
} = require("../Controllers/Books.controller");

const BooksRouter = express.Router();
//create
BooksRouter.post("/create", BooksCreateController);
BooksRouter.get("/allbooks", AllBooks);
BooksRouter.get("/bookdetails/:id", BookDetails);
BooksRouter.delete("/bookdelete/:id", BookDelete);
BooksRouter.put("/bookupdate/:id", Bookupdate);
module.exports = BooksRouter;

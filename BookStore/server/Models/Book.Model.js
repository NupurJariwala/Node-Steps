const mongoose = require("mongoose");
const booksSchema = new mongoose.Schema({
  userName: String,
  title: { type: String },
  image: {
    type: String,
    default:
      "https://i.pinimg.com/474x/86/de/41/86de41964c76ad08bfc1f027beb4b5e0.jpg",
  },
  author: { type: String },
  description: { type: String },
  tags: [String],
  ISBN: { type: Number, unique: true },
  publishedDate: {
    type: String,
    default: new Date().toLocaleString(),
  },
  price: { type: Number },
});
const BooksModel = mongoose.model("books", booksSchema);

module.exports = BooksModel;

const mongoose = require("mongoose");
const notesSchema = new mongoose.Schema({
  name: String,
  userId: String,
  subject: String,
  description: String,

  image: {
    type: String,
    default:
      "https://i.pinimg.com/474x/86/de/41/86de41964c76ad08bfc1f027beb4b5e0.jpg",
  },
});
const NotesModel = mongoose.model("notes", notesSchema);

module.exports = NotesModel;

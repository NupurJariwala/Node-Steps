const dotenv = require("dotenv");
const NotesModel = require("../models/notesModel");
dotenv.config();
const notesCreateController = async (req, res) => {
  const { subject, description, name } = req.body;
  try {
    // console.log(req.user);
    await NotesModel.create({
      name,
      subject,
      description,
      userId: req.user?._id,
    });
    res.status(201).json({ message: "Note created successfully" });
  } catch (error) {
    res.status(400).json({ message: "something went to wrong " });
  }
};

const user_delete_controller = async (req, res) => {
  const { notesId } = req.params;
  const userid = req.user._id;

  try {
    const data = await NotesModel.findOne({ userId: userid, _id: notesId });
    // console.log(data);
    if (!data) {
      return res.status(404).json({ message: "please login" });
    }
    await NotesModel.findByIdAndDelete(notesId);
    res.status(200).json({ message: "Note deleted successfully" });
    // res.send("ok");
  } catch (error) {
    res.status(400).json({ message: "something went to wrong" });
  }
};

const user_update_controller = async (req, res) => {
  const { notesId } = req.params;
  const userid = req.user._id;
  const { subject, description, name } = req.body;
  try {
    const data = await NotesModel.findOne({ userId: userid, _id: notesId });
    console.log(data);
    if (!data) {
      return res.status(404).json({ message: "please login" });
    }
    await NotesModel.findByIdAndUpdate(notesId, { ...req.body });

    res.status(200).json({ message: "Note update successfully" });
    // res.send("ok");
  } catch (error) {
    res.status(400).json({ message: "something went to wrong" });
  }
};

const user_notes_controller = async (req, res) => {
  const userid = req.user._id;

  try {
    const data = await NotesModel.find({ userId: userid });
    // console.log(data);
    if (!data) {
      return res.status(404).json({ message: "data not found" });
    }
    res.status(200).json({ message: "All Notes are here.... ", notes: data });
    // res.send("ok");
  } catch (error) {
    res.status(400).json({ message: "something went to wrong" });
  }
};

const Delete_All_By_Admin = async (req, res) => {
  try {
    await NotesModel.deleteMany();
    res.status(200).json({ message: "All Notes Are Deleted" });
  } catch (error) {
    res.status(400).json({ message: "something went to wrong" });
  }
  y;
};

const GetAllNotes_By_AdminController = async (req, res) => {
  try {
    const data = await NotesModel.find();
    if (!data || data.length == 0) {
      return res.status(404).json({ message: "data not found" });
    }
    res
      .status(200)
      .json({ message: "All Notes fetched successfully", notes: data });
  } catch (error) {
    res.status(400).json({ message: "something went to wrong" });
  }
};

module.exports = {
  notesCreateController,
  user_delete_controller,
  user_update_controller,
  user_notes_controller,
  Delete_All_By_Admin,
  GetAllNotes_By_AdminController,
};

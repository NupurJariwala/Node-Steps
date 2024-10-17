const express = require("express");
const {
  notesCreateController,
  user_delete_controller,
  user_update_controller,
  user_notes_controller,
  Delete_All_By_Admin,
  GetAllNotes_By_AdminController,
} = require("../controller/notes.contoller");
const Auth_middleware = require("../middleware/Auth");
const roleValidator = require("../middleware/roleValidator");
const NotesRouter = express.Router();
NotesRouter.use(Auth_middleware);
NotesRouter.post("/create", notesCreateController);
NotesRouter.delete("/delete/:notesId", user_delete_controller);
NotesRouter.patch("/update/:notesId", user_update_controller);
NotesRouter.get("/usernotes", user_notes_controller);
NotesRouter.delete("/deletebyadmin", roleValidator, Delete_All_By_Admin);
NotesRouter.get("/allnotes", roleValidator, GetAllNotes_By_AdminController);
module.exports = NotesRouter;

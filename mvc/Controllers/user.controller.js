const express = require("express");
const { UserModel } = require("../db"); //destucture of connection

const userRouter = express.Router();

userRouter.get("/get", async (req, res) => {
  try {
    const alluserdata = await UserModel.find();
    console.log(alluserdata);
    if (alluserdata) {
      res.status(200).json({ userdata: alluserdata });
    } else {
      res.status(404).json({ message: "no user found" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//post part
userRouter.post("/addproduct", async (req, res) => {
  //   console.log(req.body);
  try {
    const singleuser = new UserModel(req.body);
    await singleuser.save();
    res.status(200).json({ message: "User Created Successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//delete part
userRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    await UserModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Deleted...." });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//patch part

userRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await UserModel.findByIdAndUpdate(id, req.body);
    res.status(200).json({ message: "Updated...." });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = userRouter;

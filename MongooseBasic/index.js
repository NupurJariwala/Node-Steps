const mongoose = require("mongoose");
const main = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb://127.0.0.1:27017/nupurDB"
    );
    console.log("connected to MongoDB", connection);
    await UserModel.insertMany([{ name: "Sonu", age: 34, city: "Surat" }]);
  } catch (error) {
    console.log(error);
  }
};

main();

//connection,structure,validation
const userSchema = new mongoose.Schema(
  {
    name: String,
    // age: Number, for validation , if age is not added then show validation faild
    age: {
      type: Number,
      required: true,
    },
    city: String,
  },
  { versionKey: false }
);

const UserModel = mongoose.model("user", userSchema);

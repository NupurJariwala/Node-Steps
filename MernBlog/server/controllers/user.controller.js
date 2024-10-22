const Signup = (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please fill the fields" });
    }
    if (password.length != 4) {
      return res
        .status(400)
        .json({ message: "password must be 4 character long" });
    }
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

module.exports = { Signup };

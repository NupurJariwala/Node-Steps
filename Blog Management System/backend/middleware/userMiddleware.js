const userValidator = (req, res, next) => {
  const { role } = req.user;
  if (role != "user") {
    return res
      .status(403)
      .json({ message: "You are not authorized to access this resource." });
  } else {
    next();
  }
};

module.exports = userValidator;

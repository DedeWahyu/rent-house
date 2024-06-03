const User = require("../models/users");
const getAllUser = async (req, res) => {
  const users = await User.find();
  res.status(200);
  res.json(users);
};
module.exports = {
  getAllUser,
};

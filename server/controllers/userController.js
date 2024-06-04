const User = require("../models/users");

const getAllUser = async (req, res) => {
  const users = await User.find();
  res.status(200);
  res.json(users);
};

const uploadProfileImage = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ msg: 'Pengguna tidak ditemukan' });
    }

    user.img_url = `/images/members/${req.file.filename}`;
    await user.save();

    res.json({ img_url: user.img_url });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Kesalahan server");
  }
};

module.exports = {
  getAllUser,
  uploadProfileImage
};

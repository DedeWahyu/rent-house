const express = require("express");
const router = express.Router();
const upload = require('../utils/multer');
const user = require("../controllers").user;

router.get("/", user.getAllUser);

router.post('/upload/:id', upload.single('profileImage'), user.uploadProfileImage);

module.exports = router;

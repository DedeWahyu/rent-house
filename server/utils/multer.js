const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/members');
  },
  filename: function (req, file, cb) {
    cb(null, req.params.id + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

module.exports = upload;

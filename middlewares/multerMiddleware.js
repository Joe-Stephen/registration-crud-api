// multerMiddleware.js
const multer = require("multer");
const db = require("../models");

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    console.log("file name form multer : ", file);
    return cb(null, `${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;

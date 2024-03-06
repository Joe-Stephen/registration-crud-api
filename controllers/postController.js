const multer = require("multer");
const storeImage = require("../models/imageModel.js");
const multerMiddleware = require("../middlewares/multer_middleware");

module.exports = {
  imageUploadform: function (req, res) {
    res.render("upload-form");
  },
  storeImage: function (req, res) {
    const upload = multer({
      storage: multerMiddleware.image.storage(),
      allowedImage: multerMiddleware.image.allowedImage,
    }).single("image");
    upload(req, res, function (err) {
      if (err) {
        res.send(err);
        throw err;
      } else {
        //storing image url in database
        const imageName = req.file.originalname;
        const inputValues = {
            userId:req.body.userId,
            title:req.body.title,
            description:req.body.description,
          image_name: imageName,
        };
        //calling the model
        storeImage(inputValues, function (data) {
          console.log("Image uploaded.");
          res.render("upload-form", { alertMsg: data });
        });
      }
    });
  }
};


const express = require("express");
const multerMiddleware = require("../middlewares/multerMiddleware");
const userRouter = express.Router();
const {
  registerUser,
  validateLoginDetails,
} = require("../controllers/userController");
const {
  storeImage,
} = require("../controllers/imageController");
userRouter.post("/register", registerUser);
userRouter.post("/login", validateLoginDetails);
userRouter.post("/store-image", multerMiddleware.array("photo"), storeImage);

module.exports = userRouter;

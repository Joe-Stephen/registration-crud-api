const express = require("express");
const multerMiddleware = require("../middlewares/multerMiddleware");
const userRouter = express.Router();
const {
  postComment,
  deleteComment,
} = require("../controllers/commentController.js");
const {
  registerUser,
  validateLoginDetails,
} = require("../controllers/userController");
const { storeImage } = require("../controllers/imageController");

//user routes
userRouter.post("/register", registerUser);
userRouter.post("/login", validateLoginDetails);

//post routes
userRouter.post("/store-image", multerMiddleware.array("photo"), storeImage);

//comment routes
userRouter.post("/comment", postComment);
userRouter.delete("/comment", deleteComment);

module.exports = userRouter;

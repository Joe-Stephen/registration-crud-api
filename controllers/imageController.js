const db = require("../models");
const Image = db.images;
const Post = db.posts;

const storeImage = async (req, res) => {
  try {
    console.log("the req.body= ", req.body);
    console.log("the req.file= ", req.files);
    const arr = [];
    req.files.forEach((file) => {
      arr.push(file.originalname);
    });
    const newPost = await Post.create({
      title: req.body.title,
      description: req.body.description,
    });
    await Image.create({
      postId: newPost.id,
      images: arr,
    });

    res.status(201).json("The post has been saved.");
  } catch (error) {
    console.error("An error happened storeImage :", error);
    res.status(201).json("The post has been saved.");
  }
};
module.exports = {
  storeImage,
};

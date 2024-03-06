const db = require("../models");
const Image = db.images;
const Post = db.posts;

const storeImage = async (req, res) => {
  console.log("the req.body= ", req.body);
  console.log("the req.file= ", req.files);
  const arr = [];
  req.files.forEach((file) => {
    arr.push(file.originalname);
  });
  const newPost = await Post.create({
    // images: arr,
    title: req.body.title,
    description: req.body.description,
  });
  await Image.create({
    postId: newPost.id,
    images: arr,
  });

  res.status(201).json("The post has been saved.");
};
module.exports = {
  storeImage,
};

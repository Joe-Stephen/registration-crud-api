const db = require("../models");
const Image = db.images;
const Post = db.posts;
const User = db.users;

const storeImage = async (req, res) => {
  try {
    console.log("the req.body= ", req.body);
    console.log("the req.file= ", req.files);
    const arr = [];
    req.files.forEach((file) => {
      arr.push(file.originalname);
    });
    const newPost = await Post.create({
      userId: 3,
      title: req.body.title,
      description: req.body.description,
    });
    arr.forEach(async (file) => {
      console.log("the file from foreach:", file);
      await Image.create({
        postId: newPost.id,
        image: file,
      });
    });
    res.status(201).json("The post has been saved.");
  } catch (error) {
    console.error("An error happened in storeImage :", error);
    res.status(201).json("Failed to save the post.");
  }
};

const listAllPostsOfUser = async (req, res) => {
  try {
    const { userId } = req.params;
    console.log("the userId= ", userId);

    const posts = await User.findByPk(userId, { include: Post });
    console.log("posts== ", posts);

    res.status(201).json("The post has been logged.");
  } catch (error) {
    console.error("An error happened in listAllPostsOfUser :", error);
    res.status(201).json("Failed to listAllPostsOfUser.");
  }
};
module.exports = {
  storeImage,
  listAllPostsOfUser,
};

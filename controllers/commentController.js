const db = require("../models");
const Comment = db.comments;
const Post = db.posts;

const postComment = async (req, res) => {
  try {
    console.log("the req.body= ", req.body);
  } catch (error) {}
};

module.exports = {
  postComment,
};

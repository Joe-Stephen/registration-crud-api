const db = require("../models");
const Comment = db.comments;

const postComment = async (req, res) => {
  try {
    console.log("the req.body= ", req.body);
    Comment.create({
      postId: 1,
      userId: 3,
      comment: req.body.comment,
    });
    res.status(201).json("The comment has been saved.");
  } catch (error) {
    console.error("An error happened in postComment :", error);
    res.status(201).json("Failed to post the comment.");
  }
};

const deleteComment = async (req, res) => {
  try {
    console.log("the req.body= ", req.body);
    const { reqUserId, postOwnerId, commentOwnerId, id } = req.body;
    if (reqUserId !== postOwnerId && reqUserId !== commentOwnerId) {
      console.error("This user is not authorized to delete this comment.");
      res.status(400).json("You are not authorized to delete this comment.");
    } else {
      Comment.destroy({
        where: { id: id },
      });
      res.status(201).json("The comment has been deleted.");
    }
  } catch (error) {
    console.error("An error happened in deleteComment :", error);
    res.status(400).json("Failed to delete the comment.");
  }
};
module.exports = {
  postComment,
  deleteComment,
};

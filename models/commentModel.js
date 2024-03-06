module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define("comments", {
    postId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    comment: {
      type: Sequelize.JSON,
      allowNull: false,
    },
  });

  return Comment;
};

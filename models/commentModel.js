module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("comments", {
      postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      comments: {
        type: Sequelize.JSON,
        defaultValue: null,
      },
    });
  
    return Comment;
  };
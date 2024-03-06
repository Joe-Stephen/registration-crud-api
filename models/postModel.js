module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("posts", {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    comments: {
      type: Sequelize.JSON,
      defaultValue: null,
    },
  });

  return Post;
};

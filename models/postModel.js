module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("posts", {
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  });

  
  return Post;
};

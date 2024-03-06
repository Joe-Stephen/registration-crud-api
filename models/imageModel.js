module.exports = (sequelize, Sequelize) => {
  const Image = sequelize.define("images", {
    postId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING,
      // allowNull: false,
    },
  });

  return Image;
};

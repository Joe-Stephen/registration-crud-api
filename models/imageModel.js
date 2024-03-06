module.exports = (sequelize, Sequelize) => {
  const Image = sequelize.define("images", {
    postId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    images: {
      type: Sequelize.JSON,
      defaultValue: null,
    },
  });

  return Image;
};

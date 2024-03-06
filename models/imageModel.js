module.exports = (sequelize, Sequelize) => {
  const Image = sequelize.define("images", {
    postId: {
      type: Sequelize.INTEGER,
      defaultValue: null,
    },
    images: {
      type: Sequelize.JSON,
      allowNull: false,
    },
  });

  return Image;
};

const dbConfig = require("../config/dbConfig");
const Sequelize = require("sequelize");

const sequelize = new Sequelize("registration", "root", "Joekkuttan@123", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

sequelize
  .authenticate()
  .then(() => {
    console.log("connected..");
  })
  .catch((err) => {
    console.log("Error" + err);
  });
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./userModel.js")(sequelize, Sequelize);
db.posts = require("./postModel.js")(sequelize, Sequelize);
db.images = require("./imageModel.js")(sequelize, Sequelize);
db.comments = require("./commentModel.js")(sequelize, Sequelize);



db.sequelize.sync({ force: false }).then(() => {
  console.log("yes re-sync done!");
});

// 1 to Many Relation

// db.products.hasMany(db.reviews, {
//     foreignKey: 'product_id',
//     as: 'review'
// })

// db.reviews.belongsTo(db.products, {
//     foreignKey: 'product_id',
//     as: 'product'
// })

module.exports = db;

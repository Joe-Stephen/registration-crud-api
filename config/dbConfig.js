module.exports = {
  development: {
    username: "root",
    password: "Joekkuttan@123",
    database: "registration",
    host: "localhost",
    dialect: "mysql",
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

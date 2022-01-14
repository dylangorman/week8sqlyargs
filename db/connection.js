const { Sequelize } = require("sequelize");

// const connection = new Sequelize(process.env.WHATEVER IS IN YOUR ENV FILE)

const connection = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

// connection
//   .authenticate()
//   .then(() => {
//     console.log("Connection Established");
//   })
//   .catch((err) => {
//     console.log;
//   });
module.exports = connection;

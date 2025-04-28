const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, // <-- add port here
    dialect: 'mysql',
    logging: false,
  }
);
// console.log(sequelize.config);

sequelize.sync()
  .then(() => {
    console.log('✅ Database connection established successfully.');
  })
  .catch((error) => {
    console.error('❌ Unable to connect to the database:', error);
  });


module.exports = { sequelize };
// This code sets up a connection to a MySQL database using Sequelize.
// It imports the Sequelize library and creates a new instance of Sequelize with the database name, user, password, host, and dialect (MySQL).
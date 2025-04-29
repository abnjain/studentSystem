const { Sequelize, DataTypes } = require('sequelize');
const fs = require('fs');
const path = require('path');
require('dotenv').config();
// const dotenv = require('dotenv');
// dotenv.config();

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

// sequelize.authenticate()
//   .then(() => {
//     console.log('✅ Database connection established successfully.');
//   })
//   .catch((error) => {
//     console.error('❌ Unable to connect to the database:', error);
//   });

// Dynamically load all models from the models directory
// Load all models
const models = {};
const modelsDir = path.join(__dirname, '../models');

fs.readdirSync(modelsDir)
  .filter(file => file.endsWith('.js'))
  .forEach(file => {
    const modelDef = require(path.join(modelsDir, file));
    const model = modelDef(sequelize, DataTypes);
    models[model.name] = model;
  });

  // Sync database
const syncModels = async () => {
  try {
    await sequelize.sync({ force: false }); // Set to true only during development
    console.log('✅ All models were synchronized successfully.');
  } catch (err) {
    console.error('❌ Error synchronizing models:', err);
  }
};

// sequelize.sync({ force: false })
//   .then(() => {
//     console.log('✅ All models were synchronized successfully.');
//   })
//   .catch((error) => {
//     console.error('❌ Error synchronizing models:', error);
//   });



//   // Synchronize models
// sequelize.sync({ force: true }) // Use { force: true } to drop and recreate tables
// .then(() => {
//   console.log('✅ All models were synchronized successfully.');
// })
// .catch((error) => {
//   console.error('❌ Error synchronizing models:', error);
// });

module.exports = {
  sequelize,
  syncModels,
  ...models,
};
// This code sets up a connection to a MySQL database using Sequelize.
// It imports the Sequelize library and creates a new instance of Sequelize with the database name, user, password, host, and dialect (MySQL).
'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Load all models dynamically
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Associate models if applicable
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Check if tables exist before syncing
(async () => {
  try {
    const [results] = await sequelize.query(
      "SELECT table_name FROM information_schema.tables WHERE table_schema = DATABASE();"
    );
    const existingTables = results.map(row => row.TABLE_NAME);

    // Sync only models whose tables do not exist
    for (const modelName of Object.keys(db)) {
      const tableName = db[modelName].getTableName();
      if (!existingTables.includes(tableName)) {
        console.log(`Table "${tableName}" does not exist. Creating...`);
        await db[modelName].sync({ force: false }); // Create the table if it doesn't exist
        console.log(`✅ Table for model "${modelName}" created.`);
      } else {
        console.log(`Table "${tableName}" already exists. Skipping creation.`);
      }
    }

    console.log('✅ Database synchronized successfully');
  } catch (err) {
    console.error('❌ Error synchronizing database:', err);
  }
})();

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

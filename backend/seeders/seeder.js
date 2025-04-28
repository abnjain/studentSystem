const { sequelize } = require('../config/db');
const fs = require('fs');
const path = require('path');

async function seedDatabase() {
  try {
    const dummyDataPath = path.join(__dirname, '../sql_scripts/dummy_sql.sql');
    const dummySQL = fs.readFileSync(dummyDataPath, 'utf8');

    const queries = dummySQL.split(';').map(q => q.trim()).filter(q => q);

    for (const query of queries) {
      await sequelize.query(query);
    }

    console.log('✅ Dummy data inserted successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error inserting dummy data:', error);
    process.exit(1);
  }
}

seedDatabase();

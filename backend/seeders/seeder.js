const { sequelize } = require('../config/db');
const fs = require('fs');
const path = require('path');

const seedDatabase = async function () {
  try {
    const dummyDataPath = path.join(__dirname, '../sql-scripts/dummy_data.sql');
    const dummySQL = fs.readFileSync(dummyDataPath, 'utf8');

    const queries = dummySQL.split(';').map(q => q.trim()).filter(q => q);

    for (const query of queries) {
      // Check if the query is an INSERT statement
      if (query.toLowerCase().startsWith('insert into')) {
        const tableName = query.match(/insert into (\w+)/i)[1];

        // Extract column names and rows of values from the query
        const match = query.match(/\(([^)]+)\)\s+VALUES\s+\((.+)\)/i);
        if (match) {
          const columns = match[1].split(',').map(col => col.trim());
          const rows = query
            .match(/VALUES\s+\((.+)\)/i)[1]
            .split('),(') // Split multiple rows
            .map(row => row.replace(/^\(|\)$/g, '').split(',').map(val => val.trim().replace(/['"]/g, '')));

          for (const values of rows) {
            // Build a WHERE clause to check for duplicates
            const whereClause = columns
              .map((col, index) => `${col} = '${values[index]}'`)
              .join(' AND ');

            const checkQuery = `SELECT COUNT(*) as count FROM ${tableName} WHERE ${whereClause}`;
            const [result] = await sequelize.query(checkQuery);

            if (result[0].count === 0) {
              const insertQuery = `INSERT INTO ${tableName} (${columns.join(', ')}) VALUES (${values.map(val => `'${val}'`).join(', ')})`;
              await sequelize.query(insertQuery);
            } else {
              console.log(`Skipping duplicate entry for table ${tableName}: ${whereClause}`);
            }
          }
        }
      } else {
        // Execute non-INSERT queries (e.g., USE, CREATE, etc.)
        await sequelize.query(query);
      }
    }

    console.log('✅ Dummy data inserted successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error inserting dummy data:', error);
    process.exit(1);
  }
};

module.exports = seedDatabase;
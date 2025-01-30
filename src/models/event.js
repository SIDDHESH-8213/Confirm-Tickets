const { Pool } = require('pg');
const pool = new Pool({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
}); 
const createEventTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS events (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      date TIMESTAMP NOT NULL,
      venue VARCHAR(255) NOT NULL,
      total_seats INT NOT NULL,
      available_seats INT NOT NULL
    );
  `;
  await pool.query(query);
};

module.exports = { pool, createEventTable };
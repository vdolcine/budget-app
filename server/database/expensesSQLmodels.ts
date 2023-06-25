import Pool from 'pg';
import "dotenv/config";

const pool = new Pool({
  connectionString: process.env.PGDATABASE,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query:', text);
    return pool.query(text, params, callback);
  },
};
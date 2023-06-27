import pg from 'pg';
import "dotenv/config";

const pool = new pg.Pool({
  connectionString: process.env.PGDATABASE,
});

export default {
  sqlquery: (text: string, params: any, callback: any) => {
    console.log('executed query:', text);
    return pool.query(text, params, callback);
  },
};
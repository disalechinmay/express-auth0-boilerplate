const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  max: 20,
  idleTimeoutMillis: 30000, // how long a connection is allowed to be idle before being closed (in milliseconds)
  connectionTimeoutMillis: 10000, // how long to wait when acquiring a new connection from the pool (in milliseconds)
});

module.exports = pool;

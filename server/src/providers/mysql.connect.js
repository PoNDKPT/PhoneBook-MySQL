const mysql = require('mysql2');
const util = require('util');
require('dotenv').config();

const { HOST, PORT, USER, PASSWORD, DB } = process.env;

const connection = mysql.createConnection({
  host: HOST,
  port: PORT,
  user: USER,
  password: PASSWORD,
  database: DB,
});

connection.connect((error) => {
  if (error) throw error;
  console.log('Successfully connected to the database.');
});

connection.query = util.promisify(connection.query);

module.exports = connection;

const mysql = require('mysql2');
const util = require('util');
const process = require('../configs/db.config');

const { HOST, USER, PASSWORD, DB } = process;

const connection = mysql.createConnection({
  host: HOST,
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

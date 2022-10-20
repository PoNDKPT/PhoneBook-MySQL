const mysql = require('mysql2');
const util = require('util');
const dbConfig = require('../configs/db.config');

const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

connection.connect((error) => {
  if (error) throw error;
  console.log('Successfully connected to the database.');
});

connection.query = util.promisify(connection.query);

module.exports = connection;

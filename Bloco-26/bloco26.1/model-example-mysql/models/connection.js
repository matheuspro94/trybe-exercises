const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'MatheusProenca',
  password: 'Mop.994863',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;
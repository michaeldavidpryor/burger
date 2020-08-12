const mysql = require('mysql');
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '99877986',
    database: 'burgers_db',
  });
}

connection.connect();

module.exports = connection;

// Dependencies
var mysql = require('mysql');

// Setup connection to the mysql server 
var connection = mysql.createConnection({
  host: "localhost",

  // Port; if not 3306
  port: 3306,

  // Username
  user: "root",

  // Password
  password: "rootroot",
  database: "burgers_db"
});

// Connection to run functions/program 
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
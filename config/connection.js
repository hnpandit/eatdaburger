// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection("mysql://wk4v5mzs6o5pblps:fjvfmga1bua3nhk6@zj2x67aktl2o6q2n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/t3aal9yw7ubdrdoj");

/*
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "N@vya_72",
  database: "burgers_db"
});
*/

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

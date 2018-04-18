var mysql = require("mysql");

var connection = mysql.createConnection({
    user: "root",
    password: "password",
    database: "burger_db"
});

module.exports = connection;
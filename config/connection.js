var mysql = require("mysql");

// Initialize connection
var connection = mysql.createConnection({
    user: "root",
    password: "password",
    database: "burger_db"
});

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for use with ORM
module.exports = connection;
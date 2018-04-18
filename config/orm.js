var connection = require("./connection.js");

// Create ORM with three methods
var orm = {
    // Select all from the given table
    selectAll: function(table, callback) {
        connection.query("SELECT * FROM ??", [table], function(error, results, fields) {
            if(error) throw error;
            callback(results);
        });
    },
    // Insert a new burger into the given table
    insertOne: function(table, name, callback) {
        connection.query("INSERT INTO ?? SET ?", [table, {burger_name: name, devoured: false}], function(error, results, fields) {
            if(error) throw error;
            callback("Added " + name + " to the " + table + " table.");
        });
    },
    // Devour the given burger from the given table
    updateOne: function(table, name, callback) {
        connection.query("UPDATE ?? SET ? WHERE burger_name = ?", [table, {devoured: true}, name], function(error, results, fields) {
            if(error) throw error;
            callback(name + " has been devoured.");
        })
    }
};

// Export the ORM for use with the burger
module.exports = orm;
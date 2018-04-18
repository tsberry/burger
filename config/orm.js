var connection = require("./connection.js");

var orm = {
    selectAll: function(table, callback) {
        connection.query("SELECT * FROM ??", [table], function(error, results, fields) {
            if(error) throw error;
            callback(results);
        });
    },
    insertOne: function(table, name, callback) {
        connection.query("INSERT INTO ?? SET ?", [table, {burger_name: name, devoured: false}], function(error, results, fields) {
            if(error) throw error;
            callback(results);
        });
    },
    updateOne: function(name, callback) {
        connection.query("UPDATE ?? SET ? WHERE burger_name = ?", [table, {devoured: true}, name], function(error, results, fields) {
            if(error) throw error;
            callback(results);
        })
    }
};

module.exports = orm;
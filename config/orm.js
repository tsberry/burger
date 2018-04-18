var connection = require("./connection.js");

var orm = {
    selectAll: function(callback) {
        connection.query("SELECT * FROM burgers", function(error, results, fields) {
            if(error) throw error;
            callback(results);
        });
    },
    insertOne: function(name, callback) {
        connection.query("INSERT INTO burgers SET ?", {burger_name: name, devoured: false}, function(error, results, fields) {
            if(error) throw error;
            callback(results);
        });
    },
    updateOne: function(name, callback) {
        connection.query("UPDATE burgers SET ? WHERE burger_name = ?", [{devoured: true}, name], function(error, results, fields) {
            if(error) throw error;
            callback(results);
        })
    }
};

module.exports = orm;
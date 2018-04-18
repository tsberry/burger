var connection = require("./connection.js");

var orm = {
    selectAll: function() {
        connection.query("SELECT * FROM burgers", function(error, results, fields) {
            if(error) throw error;
            
        });
    },
    insertOne: function(name) {
        connection.query("INSERT INTO burgers SET ?", {burger_name: name, devoured: false}, function(error) {
            if(error) throw error;
        });
    },
    updateOne: function(name) {
        connection.query("UPDATE burgers SET ? WHERE burger_name = ?", [{devoured: true}, name], function(error) {
            if(error) throw error;
        })
    }
};

module.exports = orm;
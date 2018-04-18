var orm = require("../config/orm.js");

// Create a burger with three methods
var burger = {
    // Selects burgers from the burgers table
    selectAll: function(callback) {
        orm.selectAll("burgers", function(data) {
            callback(data);
        })
    },
    // Inserts a new burger into the burger table
    insertOne: function(name, callback) {
        orm.insertOne("burgers", name, function(data) {
            callback(data);
        })
    },
    // Devours the burger with the given name
    updateOne: function(id, callback) {
        orm.updateOne("burgers", id, function(data) {
            callback(data);
        })
    }
};

// Exports the burger for use with the router
module.exports = burger;
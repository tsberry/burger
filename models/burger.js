var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(data) {
            callback(data);
        })
    },
    insertOne: function(name, callback) {
        orm.insertOne("burgers", name, function(data) {
            callback(data);
        })
    },
    updateOne: function(name, callback) {
        orm.updateOne("burgers", name, function(data) {
            callback(data);
        })
    }
};

module.exports = burger;
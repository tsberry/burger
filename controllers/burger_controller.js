var express = require("express");
var burger = require("../models/burger.js");

// Intializes router
var router = express.Router();

// The get route selects the burgers
router.get("/api/burgers", function(req, res) {
    burger.selectAll(function(data) {
        res.json(data);
    });
});

// The post route inserts a burger
router.post("/api/burgers", function(req, res) {
    burger.insertOne(req.body.name, function(data) {
        res.json({
            "message": "Burger added",
            "data": data
        })
    });
});

// The put route devours a burger
router.put("/api/burgers", function(req, res) {
    burger.updateOne(req.body.name, function(data) {
        res.json({
            "message": "Burger devoured",
            "data": data
        })
    });
});

// Export the router for use with the server
module.exports = router;
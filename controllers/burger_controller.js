var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/api/burgers", function(req, res) {
    burger.selectAll(function(data) {
        res.json(data);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne(req.body.name, function(data) {

    });
});

router.put("/api/burgers", function(req, res) {
    burger.updateOne(req.body.name, function(data) {

    });
});

module.exports = router;
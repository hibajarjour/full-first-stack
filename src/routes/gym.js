var express = require("express");
var mongoose = require("mongoose");
var gymRoutes = express.Router();
var gym = require("../models/gym");
///////////////////
gymRoutes.route("/gym")
    .get(function (req, res) {
        gym.find(function (err, posts) {
            if (err) {
                console.log("Error found");
                res.status(500).send(err);
            } else {
                res.send(posts);
            }
        });

    })
    .post(function (req, res) {
        var newGym = new gym(req.body);
        newGym.save(function (err, newGymObj) {
            console.log("Just saved!")
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(newGymObj);
            }
        });

    });
gymRoutes.route("/gym/:id")
    .get(function (req, res) {
        gym.findById(req.params.id, function (err, posts) {
            if (err) {
                console.log("Error found");
                res.status(500).send(err);
            } else {
                res.send(posts);
            }
        });

    }).put(function (req, res) {
        gym.findByIdAndUpdate(req.params.id, req.body, {
                new: true },
            function (err, updatedPost) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.send(updatedPost);
                }
            })


    })
    .delete(function (req, res) {
        console.log("delete")
        gym.findByIdAndRemove(req.params.id, function (err, deletedgym) {
            if (err) {
                res.status(500).send(err);
            } else {
                var responseObj = {
                    success: true,
                    message: "Successfully deleted the Post",
                    todo: deletedgym
                };
                res.send(responseObj);
            }
        });
    });
module.exports = gymRoutes;
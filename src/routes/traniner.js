var express = require("express");
var mongoose = require("mongoose");
var traninerRoutes = express.Router();
var traniner = require("../models/traniner");
///////////////////
traninerRoutes.route("/traniner")
    .get(function (req, res) {
        traniner.find(function (err, traniners) {
            if (err) {
                console.log("Error found");
                res.status(500).send(err);
            } else {
              
                res.send(traniners);
            }
        });

    })
    .post(function (req, res) {
        var newTraniner = new traniner(req.body);
    console.log(req.body)
        for (var i = 0; i < req.body.classAdd.length; i++)
            {console.log(req.body.classAdd[i])
                newTraniner.class.push(req.body.classAdd[i])}
        newTraniner.save(function (err, newTraninerObj) {
            console.log("Just saved!")
            if (err) {
                res.status(500).send(err);
            } else {

                res.send(newTraninerObj);
            }
        });

    });
traninerRoutes.route("/traniner/:id")
    .get(function (req, res) {
        traniner.findById(req.params.id, function (err, traniners) {
            if (err) {
                console.log("Error found");
                res.status(500).send(err);
            } else {
                res.send(traniners);
            }
        });

    })
    .put(function (req, res) {
        var query = req.query;
        if (req.query.heart) {
            console.log("update heart Vote");
            traniner.findByIdAndUpdate(req.params.id, req.body, {
                    new: true
                },
                function (err, updatedPost) {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        res.send(updatedPost);
                    }
                })

        } else if (req.query.like) {
            console.log("update like Vote");
            traniner.findByIdAndUpdate(req.params.id, req.body, {
                    new: true
                },
                function (err, updatedPost) {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        res.send(updatedPost);
                    }
                })

        }
    })
    .delete(function (req, res) {
        console.log("delete")
        traniner.findByIdAndRemove(req.params.id, function (err, deletedgym) {
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
module.exports = traninerRoutes;
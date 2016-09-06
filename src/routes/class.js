var express = require("express");
var mongoose = require("mongoose");
var ClassRoutes = express.Router();
var Class = require("../models/class");
///////////////////
ClassRoutes.route("/Classes")
    .get(function (req, res) {
        Class.find(function (err, classes) {
            if (err) {
                console.log("Error found");
                res.status(500).send(err);
            } else {
                res.send(classes);
            }
        });

    })
    .post(function (req, res) {
        var newClass = new Class(req.body);
        newClass.save(function (err, newClassObj) {
            console.log("Just saved post!")
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(newClassObj);
            }
        });

    });
ClassRoutes
    .route("/Classes/:id")
    .get(function (req, res) {
        Class.findOne({
            "_id": req.params.id
        }, function (err, post) {
            if (err) {
                console.log("Error found");
                res.status(500).send(err);
            } else {
                //console.log(post)
                res.send(post);
            }
        });

    })
    .put(function (req, res) {

        var query = req.query;
        if (req.query.commentId) {
            console.log("comment id : " + req.query.commentId)
            console.log(req.body)
            Class.findById(req.params.id, function (err, post) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    var comment = post.comments.id(req.query.commentId);
                    comment.replies.push(req.body);
                    post.save(function(err) {
                        if (err) {
                            res.status(500).send(err);
                        } else {
                            res.send(post);
                        }
                    })
                }
            });

 

        } else {
            console.log("update id " + req.params.id)
            console.log(req.body)
            Class.findByIdAndUpdate(req.params.id, {
                $push: {
                    "comments": req.body
                }
            }, {
                new: true
            }, function (err, updatedPost) {
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
        Class.findByIdAndRemove(req.params.id, function (err, deletedPost) {
            if (err) {
                res.status(500).send(err);
            } else {
                var responseObj = {
                    success: true,
                    message: "Successfully deleted the Post",
                    todo: deletedPost
                };
                res.send(responseObj);
            }
        });
    });
module.exports = ClassRoutes;
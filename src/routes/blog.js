var express = require("express");
var mongoose = require("mongoose");
var BlogRoutes = express.Router();
var Blog = require("../models/blog");
///////////////////
BlogRoutes.route("/Blogs")
    .get(function (req, res) {
        Blog.find(function (err, posts) {
            if (err) {
                console.log("Error found");
                res.status(500).send(err);
            } else {
                res.send(posts);
            }
        });

    })
    .post(function (req, res) {
        var newBlog = new Blog(req.body);
        newBlog.save(function (err, newBlogObj) {
            console.log("Just saved!")
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(newBlogObj);
            }
        });

    });
BlogRoutes
    .route("/Blogs/:id")
    .get(function (req, res) {
        Blog.findOne({
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
            Blog.findById(req.params.id, function (err, post) {
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
            Blog.findByIdAndUpdate(req.params.id, {
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
        Blog.findByIdAndRemove(req.params.id, function (err, deletedPost) {
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
module.exports = BlogRoutes;
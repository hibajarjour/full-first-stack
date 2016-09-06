var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var BlogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    fullDescription: String,
    blogDate: {
        type: Date,
        default: Date.now
    },
    img: String,
    comments: [{
        commentOnPost: String,
        commentDate: {
            type: Date,
            default: Date.now
        },
        replies: [{
            commentOnPost: String,
            replyDate: {
                type: Date,
                default: Date.now
            }
    }]
    }],
    votes: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("Blog", BlogSchema);
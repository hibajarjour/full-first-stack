var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var TrainerSchema = new Schema({

    name: String,
    gymName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'gym' //Edit: I'd put the schema. Silly me.
    },
    description: String,
    class: [{
        className: String,
        Date: {
            type: Date,
            default: Date.now
        }
        }],
    votesLove: {
        type: Number,
        default: 0
    },
    img:{
         type: String,
        default: "noPhoto.png"
    },
    votesLike: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("Trainer", TrainerSchema);
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ClassSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    dayOfClass: [{
        type: String,
        required: true
    }],
    Fromtime: {
        type: Number,
        required: true
    },
    Totime: {
        type: Number,
        required: true
    },
    Type: {
        type: String,
        enum: ["Fitness", "Boxing"]
    },
    traninerofClass: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'traniner' //Edit: I'd put the schema. Silly me.
    },
    studentNumber: {
        type: Number,
        default: 100
    }
});

module.exports = mongoose.model("Class", ClassSchema);
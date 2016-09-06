var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var PlanSchema = new Schema({

    title: String,

    price: {
        type: Number,
        default: 0
    },
    duration: {
        type: String,
        required: true
    },
    includ: [{
        className: String,
        Date: {
            type: DateDate,
            default: Date.now
        }
        }],

    join: [{
        menmber: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'member' //Edit: I'd put the schema. Silly me.
        }
    }]



});

module.exports = mongoose.model("Plan", PlanSchema);
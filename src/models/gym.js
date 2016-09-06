var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var GymSchema = new Schema({
    GymName: {
        type: String,
        required: true
    },
    location: String,
    Email: String,
    slogan:String,
    phone: {
        type: String
    }

});

module.exports = mongoose.model("gym", GymSchema);
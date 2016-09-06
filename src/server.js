var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
//var cors = require("cors");
//var morgan = require("morgan");
var port = process.env.PORT || 8000;
app.use(bodyParser.json());
//app.use(cors());
//app.use(morgan("dev"));
mongoose.connect("mongodb://localhost/rock-vote", function () {
    console.log("Database is connected");
});
// Have Express serve up our static files instead of Brackets Live Preview. Yay!
app.use(express.static("../public"));
// Routes \\
app.use("/api", require("./routes/blog"));
app.use("/api", require("./routes/gym"));
app.use("/api", require("./routes/traniner"));
app.use("/api", require("./routes/class"));

app.listen(port, function () {
    console.log("Server is running on port " + port);
});
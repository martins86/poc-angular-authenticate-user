var express = require("express");
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var app = express();
var api = require("./routes/api");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors());

mongoose.connect(
    'mongodb://localhost:27017/authentication',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use('/api', api);

app.use(
    function(req, res, next) {
        res.status(404).send('Not found');
    }
);

app.listen(3000);
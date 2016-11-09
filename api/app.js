var express = require('express');
var mongoose = require('mongoose');
var app = express();
var cors = require('cors');

var app = express();
var path = require('path');
var port = process.env.PORT || 3030;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/simpsons");

var routes = require('./routes/routes.js');

app.use(cors());

app.listen(port, function(){
    console.log("Express app is listening on port: " + port);
});

app.use(routes);

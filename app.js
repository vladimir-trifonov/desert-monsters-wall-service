var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var config = require('./config');
var mongoose = require('mongoose');

var port = process.env.PORT || 4000; 
mongoose.connect(config.database);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));
app.use(require('./post/postRoutes'));

app.listen(port, function () {
  console.log('Server listens at http://localhost:' + port);
});

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var jwt = require('express-jwt');
var cors = require('cors');

var port = process.env.PORT || 3030;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_DB_CONN_STRING);

app.use(cors());
app.use(jwt({ secret: process.env.SECRET }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));
app.use(require('./post/postRoutes'));

app.listen(port, function () {
  if (process.env === 'production') {
    var Thalassa = require('thalassa');
    var client = new Thalassa.Client({
      apiport: 80,
      host: process.env.SERVICE_REGISTRY,
      log: function (i, m) {
        console.log(m);
      }
    });

    client.register('desert-monsters-wall-service', '1.0.0', port, {
      url: process.env.HOST
    });
    client.start();
  }

  console.log('Server listens at port:' + port);
});

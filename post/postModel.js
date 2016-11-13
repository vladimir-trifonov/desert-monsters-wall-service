var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var postSchema = new Schema({	'type' : String,	'userid' : String,	'username' : String,	'sourceid' : String,	'sourcename' : String,	'content' : String});

module.exports = mongoose.model('post', postSchema);

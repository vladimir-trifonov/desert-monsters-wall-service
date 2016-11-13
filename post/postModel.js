var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var postSchema = new Schema({	'type' : String,	'userid' : String,	'username' : String,	'srcuserid' : String,	'srcusername' : String,	'srcid' : String,	'content' : String,	'likes' : Array});

module.exports = mongoose.model('post', postSchema);

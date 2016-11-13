var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var userModel = require('../user/userModel.js');

var postSchema = new Schema({
	'userid' : String,
	'ownerid' : String,
	'ownername' : String,
	'type' : String,
	'content' : String,
	'srcid' : String,
	'likes' : [userModel]
});

module.exports = mongoose.model('post', postSchema);

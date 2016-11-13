var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userModel = require('../user/userModel.js');

var postSchema = new Schema({
	'type': String,
	'content': String,
	'likes': [userModel],
	'owner': userModel,
	'source': userModel
});

module.exports = mongoose.model('post', postSchema);

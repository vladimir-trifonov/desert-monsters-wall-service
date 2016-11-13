var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	'userid': String,
	'name': String
}, { _id: false });

module.exports = userSchema;

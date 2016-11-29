var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userModel = require('../user/userModel');

var postSchema = new Schema({
	user: userModel,
	owner: userModel,
	content: {
		type: { type: String },
		text: { type: String },
		extra: { type: String }
	}
}, {
    timestamps: true
});

module.exports = mongoose.model('post', postSchema);

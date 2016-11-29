var postModel = require('./postModel.js');

/**
 * postController.js
 *
 * @description :: Server-side logic for managing posts.
 */
module.exports = {

   showByUserID: function (req, res) {
        postModel.find({ 'user.id': req.user.id }).sort({ createdAt: -1 }).exec(function (err, posts) {
            if (err) {
                return res.send(err);
            }

            res.json({
                ok: true,
                posts: posts
            });
        });
    },
    
    create: function (req, res) {
        var post = new postModel({
			user : req.user,
			owner : req.body.user,
			content : req.body.content
        });

        post.save(function (err, post) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating post',
                    ok: false
                });
            }
            return res.status(201).json({
                ok: true
            });
        });
    }
};

var postModel = require('./postModel.js');

/**
 * postController.js
 *
 * @description :: Server-side logic for managing posts.
 */
module.exports = {

    /**
     * postController.list()
     */
    list: function (req, res) {
        postModel.find(function (err, posts) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting post.',
                    error: err
                });
            }
            return res.json(posts);
        });
    },

    /**
     * postController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        postModel.findOne({_id: id}, function (err, post) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting post.',
                    error: err
                });
            }
            if (!post) {
                return res.status(404).json({
                    message: 'No such post'
                });
            }
            return res.json(post);
        });
    },

    /**
     * postController.create()
     */
    create: function (req, res) {
        var post = new postModel({			type : req.body.type,			userid : req.body.userid,			username : req.body.username,			sourceid : req.body.sourceid,			sourcename : req.body.sourcename,			content : req.body.content
        });

        post.save(function (err, post) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating post',
                    error: err
                });
            }
            return res.status(201).json(post);
        });
    },

    /**
     * postController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        postModel.findOne({_id: id}, function (err, post) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting post',
                    error: err
                });
            }
            if (!post) {
                return res.status(404).json({
                    message: 'No such post'
                });
            }

            post.type = req.body.type ? req.body.type : post.type;			post.userid = req.body.userid ? req.body.userid : post.userid;			post.username = req.body.username ? req.body.username : post.username;			post.sourceid = req.body.sourceid ? req.body.sourceid : post.sourceid;			post.sourcename = req.body.sourcename ? req.body.sourcename : post.sourcename;			post.content = req.body.content ? req.body.content : post.content;			
            post.save(function (err, post) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating post.',
                        error: err
                    });
                }

                return res.json(post);
            });
        });
    },

    /**
     * postController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        postModel.findByIdAndRemove(id, function (err, post) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the post.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};

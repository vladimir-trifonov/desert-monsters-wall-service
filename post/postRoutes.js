var express = require('express');
var router = express.Router();
var postController = require('./postController.js');

/*
 * GET
 */
router.get('/users/:userid/posts', postController.showByUserID);

/*
 * POST
 */
router.post('/posts', postController.create);

module.exports = router;

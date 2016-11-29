var express = require('express');
var router = express.Router();
var postController = require('./postController.js');

/*
 * GET
 */
router.get('/:userid', postController.showByUserID);

/*
 * POST
 */
router.post('/', postController.create);

module.exports = router;

const express = require('express');
const router = express.Router();
const tagsController = require('../controller/tags');
const { getUser } = require("@kinde-oss/kinde-node-express");
router.post('/', tagsController.getTags);
router.post('/add', tagsController.addTag);
router.post('/bulk-add', tagsController.bulkAddTag);
router.post('/associate', getUser, tagsController.associateTagsWithUser);
router.get('/get-associated', getUser, tagsController.getTagsAssociatedWithUser);





module.exports = router;
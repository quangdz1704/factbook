const express = require('express');
const router = express.Router();
const friendsController = require('./friends.controller');
const { auth } = require('../../middleware/index');

router.post("/add-friend", auth, friendsController.addRequest)
router.post("/unfriend", auth, friendsController.unfriend)
router.post("/send-request-friend", auth, friendsController.sendRequest)
router.patch("/send-request-friend/:id", auth, friendsController.editSendRequest)

module.exports = router;
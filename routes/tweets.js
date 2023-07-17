const express = require('express');
const tweetsCtrl = require('../controllers/tweets');

const router = express.Router();

router.post('/', tweetsCtrl.postTweet);
router.get('/tweets', tweetsCtrl.getTweet);
router.get('/tweets/:id', tweetsCtrl.getTweetbyID);
router.delete('/tweets/:id', tweetsCtrl.deleteTweet);

module.exports = router;
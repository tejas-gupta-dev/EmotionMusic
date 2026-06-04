const express = require('express');
const router = express.Router();
const { getMusic } = require('../controllers/music.controller');
const { auth } = require('../middleware/auth.middleware')

router.get('/:emotion',auth , getMusic);

module.exports = router;
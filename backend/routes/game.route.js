const { Router } = require('express');
const express = require('express');
const { getGames } = require('../controllers/gameController');
const router = express.Router();
// Game model
router.route('/games').get(getGames);


module.exports = router;
const express = require('express');
const { getHorses } = require('../controllers/horseController');

const router = express.Router();

router.get('/horses', getHorses);

module.exports = router;
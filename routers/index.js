var express = require('express');
var router = express.Router();
const mainController = require('../controllers/main.js');

router.get('/', (req, res) => {res.status(200).send({message: "It's work"})});

module.exports = router;
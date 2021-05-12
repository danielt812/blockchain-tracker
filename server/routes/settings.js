const router = require('express').Router();

// Settings model
const Settings = require('../models/Settings');

router.get('/', (req, res) => {
	Settings.find()
		.then((settings) => res.json(settings))
		.catch((err) => console.log(err));
});

module.exports = router;

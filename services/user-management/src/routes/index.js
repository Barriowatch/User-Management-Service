const router = require('express').Router();
const config = require('../environment/config');
router.use(`/${config.baseAPIRoute}`, require('./api'));

module.exports = router;

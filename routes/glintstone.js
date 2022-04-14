var express = require('express');
const glintstone_controllers = require('../controllers/glintstone');
const glintstone = require('../models/glintstone');
var router = express.Router();

/* GET home page. */
router.get('/', glintstone_controllers.glintstone_view_all_Page);

module.exports = router;
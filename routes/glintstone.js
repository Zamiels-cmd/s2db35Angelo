var express = require('express');
const glintstone_controllers = require('../controllers/glintstone');
const glintstone = require('../models/glintstone');
var router = express.Router();

router.get('/', glintstone_controllers.glintstone_view_all_Page);
router.get('/detail', glintstone_controllers.glintstone_view_one_Page);
router.get('/create', glintstone_controllers.glintstone_create_Page);
router.get('/update', glintstone_controllers.glintstone_update_Page);
router.get('/delete', glintstone_controllers.glintstone_delete_Page);


module.exports = router;
var express = require('express');
const glintstone_controllers = require('../controllers/glintstone');
const glintstone = require('../models/glintstone');
var router = express.Router();


const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("../login");
}

router.get('/', secured, glintstone_controllers.glintstone_view_all_Page);
router.get('/detail', secured, glintstone_controllers.glintstone_view_one_Page);
router.get('/create', secured, glintstone_controllers.glintstone_create_Page);
router.get('/update', secured, glintstone_controllers.glintstone_update_Page);
router.get('/delete', secured, glintstone_controllers.glintstone_delete_Page);



module.exports = router;
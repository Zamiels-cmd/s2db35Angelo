var express = require('express');
var router = express.Router();

// Require controller modules. 
var api_controller = require('../controllers/api');
var glintstone_controller = require('../controllers/glintstone');

/// API ROUTE /// 

// GET resources base. 
router.get('/', api_controller.api);

/// COSTUME ROUTES /// 

// POST request for creating a Costume.  
router.post('/glintstone', glintstone_controller.glintstone_create_post);

// DELETE request to delete Costume. 
router.delete('/glintstone/:id', glintstone_controller.glintstone_delete);

// PUT request to update Costume. 
router.put('/glintstone/:id',
    glintstone_controller.glintstone_update_put);

// GET request for one Costume. 
router.get('/glintstone/:id', glintstone_controller.glintstone_detail);

// GET request for list of all Costume items. 
router.get('/glintstone', glintstone_controller.glintstone_list);

module.exports = router;
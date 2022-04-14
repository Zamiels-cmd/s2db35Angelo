var Glintstone = require('../models/glintstone');

// List of all 
exports.glintstone_list = async function(req, res) {
    try {
        theGlintstone = await Glintstone.find();
        res.send(theGlintstone);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific . 
exports.glintstone_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: glintstone detail: ' + req.params.id);
};

// Handle create on POST. 
exports.glintstone_create_post = async function(req, res) {
    console.log(req.body)
    let newInstance = new Glintstone({
        glintstone_type: req.body.glintstone_type,
        slots_used: req.body.slots_used,
        fp_cost: req.body.fp_cost
    });

    console.log(req)

    try {
        let result = await newInstance.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle  delete form on DELETE. 
exports.glintstone_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: glintstone delete DELETE ' + req.params.id);
};

// Handle update form on PUT. 
exports.glintstone_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: glintstone update PUT' + req.params.id);
};

// VIEWS 
// Handle a show all view 
exports.glintstone_view_all_Page = async function(req, res) {
    try {
        theGlintstone = await Glintstone.find();
        //console.log(theGlintstone)
        res.render('glintstone', { title: 'Glintstone Search Results', results: theGlintstone });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
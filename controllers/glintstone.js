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
exports.glintstone_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Glintstone.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
exports.glintstone_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Glintstone.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle update form on PUT. 
exports.glintstone_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`);
    try {
        let toUpdate = await Glintstone.findById(req.params.id)
            // Do updates of properties 
        if (req.body.glintstone_type)
            toUpdate.glintStone_type = req.body.glintstone_type;
        if (req.body.fp_cost) toUpdate.fp_cost = req.body.fp_cost;
        if (req.body.slots_used) toUpdate.slots_used = req.body.slots_used;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
    failed`);
    }
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

// Handle a show one view with id specified by query 
exports.glintstone_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Glintstone.findById(req.query.id)
        res.render('glintstonedetail', { title: 'Glintstone Detail', toShow: result });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
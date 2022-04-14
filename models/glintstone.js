const mongoose = require("mongoose")
const glintstoneSchema = mongoose.Schema({
    glintstone_type: String,
    slots_used: Number,
    fp_cost: Number
})

module.exports = mongoose.model("Glintstone",
    glintstoneSchema)
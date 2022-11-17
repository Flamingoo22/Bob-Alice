//import mongoose to build a model
const mongoose = require('mongoose')

//the schema - the rules the entries in the DB must be follow
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    desc: {
        type: [String],
    },
    price: {
        type: Number
    },
    size:{
        type: String,
    },
    categories:{
        type: String,
    },
    subCategories:{
        type: String,
    },
    url: {
        type: [String],
    }

}, {timestamps: true})//created at and updated at

// create the schema and export it 
const Product = mongoose.model('Product', ProductSchema)
module.exports = Product
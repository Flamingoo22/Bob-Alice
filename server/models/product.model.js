//import mongoose to build a model
const mongoose = require('mongoose')

//the schema - the rules the entries in the DB must be follow
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, '{PATH} must be present'],
        minlength: [3, '{Path} MUST BE AT LEAST 3 CHARS LONG']
    },
    desc: {
        type: String,
        required: [true, '{PATH} must be present'],
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
    }

}, {timestamps: true})//created at and updated at

// create the schema and export it 
const Product = mongoose.model('Product', ProductSchema)
module.exports = Product
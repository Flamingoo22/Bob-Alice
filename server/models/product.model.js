//import mongoose to build a model
const mongoose = require('mongoose')

//the schema - the rules the entries in the DB must be follow
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, '{PATH} must be present'],
        minlength: [3, '{Path} MUST BE AT LEAST 3 CHARS LONG']
    },
    content: {
        type: String,
        required: [true, '{PATH} must be present'],
    },
    isImportant: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})//created at and updated at

// create the schema and export it 
const Product = mongoose.model('Product', ProductSchema)
module.exports = Product
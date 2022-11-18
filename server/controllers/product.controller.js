// == CRUD ==
//import the model to make queries to the DB
const Product = require('../models/product.model')

// different methods

module.exports = {

    //Read All
    findAll: (req, res) => {
        Product.find()
            .then(allProducts => {
                res.json(allProducts)
            })
            .catch(err => res.json(err))
        },
    //Find By Categories
    findByCategories: (req, res) => {
        Product.find({categories:req.params.cat})
        .then(allProducts => {
            res.json(allProducts)
        })
        .catch(err => res.json(err))
    },
    // CREATE
    create: ( req, res ) =>{
        console.log(req.body)
        Product.create(req.body)
            .then( newProduct => {
                res.json(newProduct)
            })
            .catch(err => res.json(err))
    },


    //READ ONE
    findOne: ( req, res ) =>{
        // Product.findOne({_id: req.params.id})
        Product.findById( req.params.id )
            .then(oneProduct => res.json(oneProduct))
            .catch(err => res.json(err))
    },

    //Find By Categories
    findByCategories: (req, res) => {
        console.log(req.params.cat)
        Product.find({ categories: req.params.cat })
            .then(allProducts => {
                console.log("******")
                res.json(allProducts)
            })
            .catch(err => res.json(err))
    },


    //UPDATE
    update: (req, res) => {
        console.log('UPDATE ID:', req.params.id)
        console.log('req.body:', req.body)
        Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
            )
            .then(oneProduct => res.json(oneProduct))
            .catch(err => res.json(err))
    },

    //DELETE
    delete: ( req, res ) => {
        // Product.deleteOne({_id:req.params.id})
        Product.findByIdAndDelete( req.params.id )
            .then(result => res.json(result))
            .catch(err => res.json(err))
    }
}
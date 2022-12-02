const Product = require('../controllers/product.controller');

module.exports = (app) => {
    app.get('/api/product', Product.findAll )
    app.get('/api/products/:cat', Product.findByCategories)
    app.post('/api/product', Product.create )
    app.get('/api/product/:id', Product.findOne)
    app.get('/api/products/:cat', Product.findByCategories)
    app.put('/api/product/:id', Product.update)
    app.delete('/api/product/:id', Product.delete)
}
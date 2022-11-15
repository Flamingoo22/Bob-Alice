const Product = require('../controllers/productControllers')

module.exports = (app) => {
    app.get('/api/product', Product.findAll )
    app.post('/api/product', Product.create )
    app.get('/api/product/:id', Product.findOne )
    app.put('/api/product/:id', Product.update)
    app.delete('/app/product/:id', Product.delete)
}
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const app = express();
// const port = 8000;
app.use(cookieParser());
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true}));

// require('./server/config/mongoose.config')
// require('./server/routes/user.routes')(app)
// require('./server/routes/product.routes')(app)
// // require('./server/routes/stripe.routes')(app)


// app.listen(port, ()=>console.log(`Listening on port: ${port}`));
const stripe = require('stripe')('sk_test_51M4C6HGAtWYTDy6VpnqbUku9nvhwlhmvPrh9Duq6BoSeVERMsiDoBNNMxluHGqaOcVVBKVKBS0YQsXMQZylKO8bh00BxgBSg1O');
// const express = require('express');
// const app = express();
// app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:3000';

app.post('/create-checkout-session', async (req, res) => {
    console.log('***********')
    const session = await stripe.checkout.sessions.create({
        line_items: [
        {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1M4vQoGAtWYTDy6VDwF6R20k',
            quantity: 1,
        },
        ],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}/checkout`,
        cancel_url: `${YOUR_DOMAIN}/checkout`,
    });
    console.log(session)
    res.redirect(303, session.url);
});

app.listen(8000, () => console.log('Running on port 8000'));
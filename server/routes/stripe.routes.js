const express = require("express");
const Stripe = require("stripe");
require("dotenv").config();

const stripe = Stripe(process.env.STRIPE_KEY)

const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {
    const line_items = req.body.cartItems.map((item) => {
    // console.log(item))
        return {
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.name,
                    images:[item.url[0]],
                    description: item.desc[0],
                    metadata: {
                        id: item.id
                    },
                },
                unit_amount: item.price * 100,
            },
            quantity: item.quantity,
        };
    });

    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        success_url: 'http://localhost:3000/checkout/success',
        cancel_url: 'http://localhost:3000/checkout',
    });

    res.send({ url: session.url });
    // console.log(session)
});

module.exports = router;
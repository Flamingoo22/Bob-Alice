// const express = require('express');
const stripe = require('stripe')('sk_test_51M4C6HGAtWYTDy6VpnqbUku9nvhwlhmvPrh9Duq6BoSeVERMsiDoBNNMxluHGqaOcVVBKVKBS0YQsXMQZylKO8bh00BxgBSg1O')

module.exports = (app) => {
    app.post('/api/create-checkout-session', async (req, res) => {
        console.log(req);
        const session = await stripe.checkout.sessions.create({
        line_items: [
        {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: '{{PRICE_ID}}',
            quantity: 1,
        },
        ],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}?success=true`,
        cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    });

    res.redirect(303, session.url);
    });
}
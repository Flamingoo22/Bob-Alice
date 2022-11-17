import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import { useStateContext } from '../context/StateContext';
import axios from 'axios';

// import { loadStripe } from '@stripe/stripe-js'


// let stripePromise;

// const getStripe = () => {
//     if (!stripePromise ) {
//         const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
//     }
//     return stripePromise;
// }


const Checkout = () => {
    const { cartItems, totalPrice, onRemove } = useStateContext();

    // const item = {
    //     price : 'price_1M4vQoGAtWYTDy6VDwF6R20k',
    //     quantity: 1,
    // };

    // const checkoutOptions = {
    //     lineItems: [item],
    //     mode: 'payment',
    //     successUrl: `${window.location.origin}/success`,
    //     cancelUrl: `${window.location.origin}/cencel`,
    // }

    const redirectToCheckout = async () => {
        // console.log('redirectToCheckOut');
        // const stripe = await getStripe()
        // console.log('*************');
        // console.log(stripe)
        // const { error } = await stripe.redirectToCheckout(checkoutOptions);
        // console.log("Stripe Checkout Error:", error);
        axios.post('http://localhost:8000/create-checkout-session',{
            cartItems,
            userId: 123435
        },
        // {
        //     withCredentials:true
        // }
        ).then((res)=>{
            console.log(res)
        })
    }

    return (
        <div>
            <Navbar />
            <div className='checkout-wrapper'>
                <div className='checkout-cart'>
                    <h4>SHOPPING BAG</h4>
                    <div className='checkout-heading'>
                        <h5>ITEM</h5>
                        <h5>TOTAL</h5>
                    </div>
                    {
                        cartItems.map((item, index)=> {
                            return(
                                <div key={item.id} className='checkout-product-wrapper'>
                                    <img src={item.url[0]} className='checkout-product-img'/>
                                    <div className='checkout-product-desc'>
                                        <p className='checkout-product-name'>{item.name}</p>
                                        <p className='checkout-product-size'>SIZE: {item.size ? item.size : 'M'}</p>
                                        <p className='checkout-product-price'>${item.price} USD</p>
                                        <button className='checkout-product-remove' onClick={()=>onRemove(item)}>Remove</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className='checkout-bottom'>
                        <h5>Order Total</h5>
                        <h5>${totalPrice} USD</h5>
                    </div>
                </div>
            <div className='checkout-right'>
                <h4>CHECKOUT</h4>
                <div className='checkout-form'>
                    <label >Email Address: </label>
                    <input type="text" className='checkout-email'/>
                    <input type="submit" value='PROCEED TO CHECKOUT' className='checkout-btn' onClick={redirectToCheckout}/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Checkout
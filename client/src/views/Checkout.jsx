import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import { useStateContext } from '../context/StateContext';
import PayButton from '../components/PayButton';


const Checkout = () => {
    const { cartItems, totalPrice, onRemove } = useStateContext();

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
                                <div key={item._id} className='checkout-product-wrapper'>
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
                        <input type="text" className='checkout-email' />
                        <PayButton cartItems={cartItems}/>
                        {/* <input onClick='' type="submit" value='PROCEED TO CHECKOUT' className='checkout-btn'/> */}
                </div>
            </div>
            </div>
        </div>
    )
}

export default Checkout
import React from 'react'
import { Link } from 'react-router-dom'
import { useStateContext } from '../context/StateContext'


const Cart = ({ setShowCart }) => {
    const { cartItems, onRemove } = useStateContext()

    return (
        <div className='cart-wrapper'>
            <div className='cart-container'>
                <div className='cart-heading'>
                    <h3>SHOPPING CART</h3>
                    <button className='btn-shopping'  onClick={()=>setShowCart(false)}>BACK</button>
                </div>
                <div className='cart-items'>
                {   
                    cartItems.length > 0 &&
                    cartItems.map((item, index)=> {
                        return(
                            <div key={item._id} className='checkout-product-wrapper'>
                                <img src={item.url[0]} className='checkout-product-img' alt=''/>
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
                {
                    cartItems.length === 0 &&
                    <p className='empty-cart-message'>YOU DON'T HAVE ANY ITEMS IN YOUR CART.</p>
                }
                </div>
                {
                    cartItems.length > 0 &&
                    <Link to='/checkout' onClick={()=>setShowCart(false)}>
                    <button className='cart-checkout-btn'>
                        CHECKOUT
                    </button>
                </Link>
                }

                <Link to='/products' onClick={()=>setShowCart(false)}>
                    <button className='cart-checkout-btn'>
                        CONTINUE SHOPPING
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Cart
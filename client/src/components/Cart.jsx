import React from 'react'
import { Link } from 'react-router-dom'
import { useStateContext } from '../context/StateContext'


const Cart = ({ setShowCart }) => {
    const { cartItems, onRemove, onChangeQty, onChangeSize } = useStateContext()

    const count = [1,2,3,4,5,6,7,8,9];
    const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
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
                                    <div className='checkout-product-size'>
                                        <label>SIZE: </label>
                                        <select className='checkout-product-quantity-select' defaultValue={item.size} onChange={e=>{onChangeSize(item, e.target.value)}}>
                                            {
                                                sizes.map((size,i)=>{
                                                    return <option value={size} key={i}>{size}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className='checkout-product-quantity'>
                                        <label>qty: </label> 
                                        <select className='checkout-product-quantity-select' onChange={e=>{onChangeQty(item, e.target.value)}} defaultValue={item.quantity}>
                                            {
                                                count.map((num,i)=>{
                                                    return <option value={num} key={i}>{num}</option>
                                                })
                                            }
                                        </select> 
                                    </div>
                                    <p className='checkout-product-price'>${item.price * item.quantity} USD</p>
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

                <div onClick={()=>setShowCart(false)}>
                    <button className='cart-checkout-btn'>
                        CONTINUE SHOPPING
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart
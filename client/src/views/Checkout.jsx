import React from 'react'
import Navbar from '../components/Navbar'
import { useStateContext } from '../context/StateContext';
import PayButton from '../components/PayButton';


const Checkout = () => {
    const { cartItems, totalPrice, onRemove, onChangeQty, onChangeSize } = useStateContext();
    const count = [1,2,3,4,5,6,7,8,9];
    const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
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
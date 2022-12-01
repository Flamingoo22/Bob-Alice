import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import { useStateContext } from '../context/StateContext';
import { Toaster } from 'react-hot-toast'

const Navbar = ( props ) => {
    const { showCart, setShowCart, totalQuantities } = useStateContext()

    return (
        <div className='navbar-container'>
            <Toaster/>
            <div className='navbar-links-container'>
                <Link to="/products/menswear" className='links'>
                    MENSWEAR
                </Link>
                <Link to="/products/womenswear" className='links'>
                    WOMENSWEAR
                </Link>
            </div>
            
            <Link to='/products' className='logo-header'>
                Bob & Alice
            </Link>
            
            <button type='button' className='btn-shopping' onClick={()=>setShowCart(true)}>
                SHOPPING BAG (<span>{totalQuantities}</span>)
            </button>

            {showCart && <Cart setShowCart={setShowCart}/>}
        </div>
    )
}

export default Navbar
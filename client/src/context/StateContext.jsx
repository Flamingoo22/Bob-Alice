import axios from 'axios';
import React, { useState, createContext, useContext, useEffect } from 'react'
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ( {children} ) => {
    const [ showCart, setShowCart ] = useState(false);
    const [ cartItems, setCartItems ] = useState([]);
    const [ totalPrice, setTotalPrice ] = useState(0);
    const [ totalQuantities, setTotalQuantities ] = useState(0);
    const [ qty, setQty] = useState(1);
    const onAdd = (product, quantity) =>{
        // console.log(product)
        const checkProductInCart = cartItems.find((item) => item.id === product.id);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQuantities((prevTotalQuantities)=> prevTotalQuantities + quantity)
        // if(checkProductInCart){

        //     const updatedCartItems = cartItems.map((cartProduct) => {
        //         if(cartProduct.id === product.id) return {
        //             ...cartProduct,
        //             quantity: cartProduct.quantity + quantity
        //         };
        //     })

        //     setCartItems(updatedCartItems);
        // }
        // else 
        // {
        //     product.quantity = quantity;
        setCartItems([...cartItems, { ...product}]);
        
        toast.success(`${quantity} ${product.name} added to the cart.`);
    }


    const onRemove = (product) => {
        let foundProduct = cartItems.find((item) => item.id === product.id);
        const newCartItems = cartItems.filter((item) => item.id !== foundProduct.id)
        
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        // setTotalQuantities((prevQty)=> prevQty - foundProduct.quantity)
        setCartItems(newCartItems);
    }

    return (
        <Context.Provider
        value={{
            showCart,
            setShowCart,
            cartItems,
            totalPrice,
            onRemove,
            onAdd,
        }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);

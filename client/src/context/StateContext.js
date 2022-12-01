import React, { useState, createContext, useContext } from 'react'
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ( {children} ) => {
    const [ showCart, setShowCart ] = useState(false);
    const [ cartItems, setCartItems ] = useState([]);
    const [ totalPrice, setTotalPrice ] = useState(0);
    const [ totalQuantities, setTotalQuantities ] = useState(0);

    const onAdd = (product, quantity) =>{
        const checkProductInCart = cartItems.find((item) => item._id === product._id);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQuantities((prevTotalQuantities)=> prevTotalQuantities + quantity);
        if(checkProductInCart){
            const updatedCartItems = cartItems.map((cartProduct) => {
                if(cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
                else{
                    return {...cartProduct}
                };
            })
            setCartItems(updatedCartItems);
        }
        else 
        {
            product.quantity = 1;
            setCartItems([...cartItems, { ...product}]);
        }
        toast.success(`${quantity} ${product.name} added to the cart.`);
    }

    const onChangeQty = (product, qty) =>{
        setTotalPrice((prevTotalPrice) => (prevTotalPrice - (product.price * product.quantity) + (product.price * parseInt(qty))));
        setTotalQuantities((prevTotalQuantities)=> prevTotalQuantities - product.quantity + parseInt(qty));
        const updatedCartItems = cartItems.map((cartProduct) => {
            if(cartProduct._id === product._id) return {
                ...cartProduct,
                quantity: parseInt(qty)
            }
            else{
                return {...cartProduct}
            };
        })
        setCartItems(updatedCartItems);
    }

    const onChangeSize = ( product, size) =>{
        const updatedCartItems = cartItems.map((cartProduct) => {
            if(cartProduct._id === product._id) return {
                ...cartProduct,
                size: size
            }
            else{
                return {...cartProduct}
            };
        })
        setCartItems(updatedCartItems);
    }

    const onRemove = (product) => {
        let foundProduct = cartItems.find((item) => item._id === product._id);
        const newCartItems = cartItems.filter((item) => item._id !== foundProduct._id)
        
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * product.quantity);
        setTotalQuantities((prevQty)=> prevQty - foundProduct.quantity)
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
            totalQuantities,
            onChangeQty,
            onChangeSize
        }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);

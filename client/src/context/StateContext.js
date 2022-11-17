import React, { useState, createContext, useContext } from 'react'
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ( {children} ) => {
    const [ showCart, setShowCart ] = useState(false);
    const [ cartItems, setCartItems ] = useState([
        { 
            id: 5, 
            name:'Comfy', 
            price: 14, 
            size:'M',
            desc: [
            'Cotton fleece hoodie.',
            '',
            '· Logo graphic printed at chest',
            '· Kangaroo pocket',
            '· Rib knit hem and cuffs',
            '',
            'Supplier color: Light brown',
            '',
            '100% cotton.',
            '',
            'Imported.'], 
            category: 'Menswear',
            subCategory:'tops', 
            url:[
                'https://img.ltwebstatic.com/images3_pi/2021/11/19/1637299999d70f155408f66b275c63777686174ecc_thumbnail_600x.webp',
                'https://img.ltwebstatic.com/images3_pi/2021/09/02/16305703126adc14b0ba03889e9ca962a4a25b25d5_thumbnail_600x.webp',
                'https://img.ltwebstatic.com/images3_pi/2021/09/06/1630905489d1254fbf856073b3f158a470fcf8a4f1_thumbnail_600x.webp',
                'https://img.ltwebstatic.com/images3_pi/2021/09/02/163057031739c60f9ba2d3f97c3cd83449b7e4f3d6_thumbnail_600x.webp',
                'https://img.ltwebstatic.com/images3_pi/2021/11/19/1637300001a83d705407d9b9711fe07083f30fba6d_thumbnail_600x.webp'
            ]},
            { 
                id: 2, 
                name:'Comfy', 
                price: 14, 
                size:'L',
                desc: [
                'Cotton fleece hoodie.',
                '',
                '· Logo graphic printed at chest',
                '· Kangaroo pocket',
                '· Rib knit hem and cuffs',
                '',
                'Supplier color: Light brown',
                '',
                '100% cotton.',
                '',
                'Imported.'], 
                category: 'Menswear',
                subCategory:'tops', 
                url:[
                    'https://img.ltwebstatic.com/images3_pi/2021/11/19/1637299999d70f155408f66b275c63777686174ecc_thumbnail_600x.webp',
                    'https://img.ltwebstatic.com/images3_pi/2021/09/02/16305703126adc14b0ba03889e9ca962a4a25b25d5_thumbnail_600x.webp',
                    'https://img.ltwebstatic.com/images3_pi/2021/09/06/1630905489d1254fbf856073b3f158a470fcf8a4f1_thumbnail_600x.webp',
                    'https://img.ltwebstatic.com/images3_pi/2021/09/02/163057031739c60f9ba2d3f97c3cd83449b7e4f3d6_thumbnail_600x.webp',
                    'https://img.ltwebstatic.com/images3_pi/2021/11/19/1637300001a83d705407d9b9711fe07083f30fba6d_thumbnail_600x.webp'
                ]}

    ]); //dummy data
    const [ totalPrice, setTotalPrice ] = useState(28);
    // const [ totalQuantities, setTotalQuantities ] = useState(0);
    // const [ qty, setQty] = useState(1);
    const [products, setProducts] = useState([ 
        { 
            id: 1, 
            name:'man hoodie', 
            price: 19.00, 
            desc: 'good hoodie', 
            category: 'menswear', 
            subCategory:'tops', 
            url:'https://img.ltwebstatic.com/images3_pi/2021/11/19/1637299999d70f155408f66b275c63777686174ecc_thumbnail_600x.webp' 
        },
        { id: 2, name:'Letter & Figure Graphic Kangaroo Pocket Drawstring Hoodie', price: 26.00, desc: 'good hoodie', category: 'menswear', subCategory:'tops', url:'https://img.ltwebstatic.com/images3_pi/2021/11/23/16376344165af9c0bd586370becf60f158ee1f0e49_thumbnail_600x.webp' },
        { id: 3, name:'Men Color Block Kangaroo Pocket Drawstring Hoodie', price: 21.49, desc: 'good hoodie', category: 'menswear', subCategory:'tops', url:'https://img.ltwebstatic.com/images3_pi/2022/06/06/1654478170d579eee6c8a372a44640bc4d9d6af501_thumbnail_600x.webp' },
        { id: 4, name:'Kangaroo Pocket Drop Shoulder Drawstring Thermal Hoodie', price: 17.99, desc: 'good hoodie', category: 'womenswear', subCategory:'tops', url:'https://img.ltwebstatic.com/images3_pi/2021/07/13/16261816761b8dda286670d070b4faf2a78ab1c1e0_thumbnail_600x.webp' },
        { id: 5, name:'Colorblock Drawstring Pocket Hoodie', price: 17.49, desc: 'good hoodie', category: 'menswear', subCategory:'tops', url:'https://img.ltwebstatic.com/images3_pi/2021/07/28/1627471257903a39564dde6f473acbc8cc31fe9186_thumbnail_600x.webp' },
        { id: 6, name:'Cartoon Graphic Drop Shoulder Drawstring Thermal Lined Hoodie', price: 24.49, desc: 'good hoodie', category: 'womenswear', subCategory:'tops', url:'https://img.ltwebstatic.com/images3_pi/2022/06/30/1656587654c70bffadac75ece2d45fcc6fcfeff945_thumbnail_600x.webp' },
        { id: 7, name:'Kangaroo Pocket Thermal Lined Hoodie', price: 27.99, desc: 'good hoodie', category: 'womenswear', subCategory:'tops', url:'https://img.ltwebstatic.com/images3_pi/2021/11/15/163694798589e33aa444f8a8e06cdf0f2a9d59eab9_thumbnail_600x.webp'},
        { id: 8, name:'Cartoon And Korean Letter Graphic Drawstring Thermal Lined Hoodie', price: 26.49, desc: 'good hoodie', category: 'womenswear', subCategory:'tops', url:'https://img.ltwebstatic.com/images3_pi/2021/11/19/1637300034088b5321482e02016e91399895d68b72_thumbnail_600x.webp' },
        { id: 9, name:'EZwear-E Color Block Drop Shoulder Kangaroo Pocket Hoodie', price: 24.99, desc: 'good hoodie', category: 'womenswear', subCategory:'tops', url:'https://img.ltwebstatic.com/images3_pi/2021/09/14/1631582759cf4cdfac6607ea38ea75694965544ef1_thumbnail_600x.webp' },
        { id: 10, name:'ROMWE Guys Solid Drawstring Pocket Hoodie', price: 19.49, desc: 'good hoodie', category: 'menswear', subCategory:'tops', url:'https://img.ltwebstatic.com/images3_pi/2021/07/26/1627293634a5a08447e3199b1b084bd29f2414d5f7_thumbnail_600x.webp' }
    ]);

    const onAdd = (product, quantity) =>{
        console.log(product)
        // const checkProductInCart = cartItems.find((item) => item.id === product.id);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        // setTotalQuantities((prevTotalQuantities)=> prevTotalQuantities + quantity)
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
        // }
        
        toast.success(`${quantity} ${product.name} added to the cart.`);
    }


    const onRemove = (product) => {
        console.log(product)
        let foundProduct = cartItems.find((item) => item.id === product.id);
        console.log(foundProduct)
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
            products,
            setProducts
        }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);

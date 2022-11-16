import React, { useEffect } from 'react'
// import axios from 'axios';
import Navbar from '../components/Navbar';
import ProductTable from '../components/ProductTable';
import { useParams } from 'react-router-dom';
import { useStateContext } from '../context/StateContext';

const Products = () => {
    const { cat } = useParams();
    const { products, setProducts } = useStateContext();

    useEffect(() => {
        // how to set the conditional statement assuming we fetch the data from api above?

        if(cat){
            const filterProducts = products.filter(product => product.category === cat)
            // setProducts([...products.filter(product => product.category === cat)])
            setProducts(filterProducts)
        }
        return () => {
            
        };
    }, [cat, products, setProducts]);
    return (
        <div>
            <Navbar />
            {cat
            ? 
            <ProductTable products={products} />
            :
            <ProductTable products={products} />
        }

        </div>
    )
}

export default Products
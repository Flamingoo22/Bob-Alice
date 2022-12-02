import React, { useEffect, useState } from 'react'
// import axios from 'axios';
import Navbar from '../components/Navbar';
import ProductTable from '../components/ProductTable';
import { useParams } from 'react-router-dom';
import axios from 'axios';

    const Products = () => {
        const { cat } = useParams()
        const [products, setProducts] = useState([]);

    useEffect(() => {
        if(cat){
            axios.get('http://localhost:8000/api/products/'+cat)
            .then((res) =>{
                setProducts([...res.data])
            })
        }
        else{
            axios.get('http://localhost:8000/api/product')
            .then((res) =>{
                setProducts([...res.data])
            })
        }
    }, [cat]);

    return (
        <div>
            <Navbar />
            {products.length > 1 && <ProductTable products={products} />}
        </div>
    )
}

export default Products
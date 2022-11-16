import React, { useEffect } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid'
import Product from './Product'

const ProductTable = ({ products }) => {


    return (
        <div>
            {
                <Grid container spacing={2}>
                    {
                        products.map((product)=>{
                            return <Product product={product} key={product.id}/>
                        })
                    }
                </Grid>
            }
        </div>
    )
}

export default ProductTable
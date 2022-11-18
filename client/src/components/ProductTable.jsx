import React from 'react';
import Grid from '@mui/material/Grid'
import Product from './Product'

const ProductTable = ({ products }) => {

    return (
        <div>
            {
                <Grid container spacing={2}>
                    {
                        products.map((product, i)=>{
                            return <Product product={product} 
                            key={i}
                            
                            />
                        })
                    }
                </Grid>
            }
        </div>
    )
}

export default ProductTable
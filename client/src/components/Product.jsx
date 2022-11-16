import React from 'react';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom'

const Product = ({product}) => {
    return (
        <Grid item xs={6} md={4}>
            <Link to={`/product/${product.id}`} className='links'>
                <img src={product.url} />
                <h3>{product.name}</h3>
                <p>${product.price} USD</p>
            </Link>
        </Grid>
    )
}

export default Product
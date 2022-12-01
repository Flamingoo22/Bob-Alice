import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import { useStateContext } from '../context/StateContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const OneProduct = (props) => {
    const { onAdd, onChangeSize } = useStateContext()
    const { id } = useParams();
    const [ product, setProduct ] = useState({});

    useEffect(() =>{
        axios.get('http://localhost:8000/api/product/'+id)
        .then((res)=>{
            setProduct(res.data)
        })
    })
    const size = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

    return (
        <div>
            <Navbar />
            {product._id && <div className='product-detail-container'>
                <div className='product-desc'>
                    {
                    product.desc.map((index, i )=>{
                        return (
                            index
                            ? 
                            <p key={i}>{index}</p>
                            :
                            <br key={i}/>
                        ) 
                    })
                }
                </div>

                {
                    product.url.map((url, index) => {
                        return <img src={url} key={index} alt={''} className='product-detail-img'/>
                    })
                }

                <div className='product-detail'>
                    <h3 className='product-desc-header'>
                        {product.name}
                    </h3>
                    <p className='product-desc-price'>${product.price} USD</p>
                    <select className='select-size' onChange={e=>onChangeSize(product, e.target.value)}>
                        {
                            size.map((opt, i)=>{
                                return <option key={i}>{opt}</option>
                            })
                        }
                    </select>
                    <button className='add-to-cart' onClick={()=>onAdd(product,1)}>ADD TO CART</button>
                </div>
            </div>
            }
        </div>
                    
    )
}

export default OneProduct
import React from 'react'
// import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useStateContext } from '../context/StateContext';

const OneProduct = (props) => {
    const { onAdd } = useStateContext()

    const product = { 
        id: 1, 
        name:'Cartoon And Korean Letter Graphic Drawstring Thermal Lined Hoodie', 
        price: 14, 
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
            // 'https://img.ltwebstatic.com/images3_pi/2021/11/19/1637299999d70f155408f66b275c63777686174ecc_thumbnail_600x.webp',
            'https://img.ltwebstatic.com/images3_pi/2021/09/02/16305703126adc14b0ba03889e9ca962a4a25b25d5_thumbnail_600x.webp',
            'https://img.ltwebstatic.com/images3_pi/2021/09/06/1630905489d1254fbf856073b3f158a470fcf8a4f1_thumbnail_600x.webp',
            'https://img.ltwebstatic.com/images3_pi/2021/09/02/163057031739c60f9ba2d3f97c3cd83449b7e4f3d6_thumbnail_600x.webp',
            // 'https://img.ltwebstatic.com/images3_pi/2021/11/19/1637300001a83d705407d9b9711fe07083f30fba6d_thumbnail_600x.webp'
        ]}
    const size = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
    // const id = useParams();

    return (
        <div>
            <Navbar />
            <div className='product-detail-container'>
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
                    <select className='select-size'>
                        {
                            size.map((opt, i)=>{
                                return <option key={i}>{opt}</option>
                            })
                        }
                    </select>
                    <button className='add-to-cart' onClick={()=>onAdd(product,1)}>ADD TO CART</button>
                </div>
            </div>
            
        </div>
    )
}

export default OneProduct
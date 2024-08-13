// ProductDetails.jsx
/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Slider from "react-slick";
import { CartContext } from '../../Context/CartContext';
import { toast } from 'react-hot-toast';


export default function ProductDetails() {
    const [productDetails, setProductDetails] = useState({})
    const [relatedProducts, setRelatedProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [productId, setProductId] = useState(null)
    let {addProduct} = useContext(CartContext)

    let {id, category}  = useParams()

    // react-slick-slider
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows: false,
    };

    async function getProductDetails(id) {
        const api = `https://ecommerce.routemisr.com/api/v1/products/${id}`
        let {data} = await axios.get(api)
        setProductDetails(data.data)
    }
    
    async function getRelatedProduct() {
        const api = `https://ecommerce.routemisr.com/api/v1/products/`
        let {data} = await axios.get(api)
        let allProducts = data.data
        let filteredProduct = allProducts.filter((product)=> product.category.name == category)
        setRelatedProducts(filteredProduct)
    }
    
    async function addProductToCart(productId) {
        setLoading(true)
        setProductId(productId)
        let response = await addProduct(productId)
        if(response.data.status == 'success'){
            toast.success(response.data.message, {
                position: 'bottom-center',
                style: {
                minWidth: '370px',
                }
            });
        }else{
        toast.error(response.data.message);
        }
        setLoading(false)
    }

    useEffect(()=>{
        getProductDetails(id)
        getRelatedProduct()
    },[id, category])

    return <>
        {/* ==================== Product Details ==================== */}
        <div className='row items-center pb-5'>
            <div className="w-full sm:w-1/4 p-2">
                {/* ========== react-slick-slider ========== */}
                <Slider {...settings}>
                    {productDetails?.images?.map((src, i)=>
                        <img key={i} src={src} className='cursor-pointer' alt="" />
                    )}
                </Slider>
            </div>
            <div className="w-full sm:w-3/4">
                <div className='p-5'>
                    <h4 className='text-2xl'>{productDetails.title}</h4>
                    <p className='text-xl text-gray-500'>{productDetails.description}</p>
                    <span className='text-main'>{productDetails.category?.name}</span>
                    <div className="row justify-between mt-3">
                        <span>{productDetails.price} EGP</span>
                        <span><i className='fa-solid fa-star text-yellow-300'></i>{productDetails.ratingsAverage}</span>
                    </div>
                    <button onClick={()=> addProductToCart(productDetails.id)} className='btn bg-main w-full'>
                        {loading ? <i className="fa-solid fa-spinner fa-spin"></i> 
                            : <span><i className="fa-solid fa-plus"></i> add to Cart <i className="fa-solid fa-cart-shopping"></i></span>
                        }
                    </button>
                </div>
            </div>
        </div>

        <hr/>

        {/* ==================== Related Product ==================== */}
        <h2 className='text-main text-xl my-5 font-bold'>Related Product</h2>
        <div className="row">
            {relatedProducts.map((product)=>
                <div key={product.id} className="md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
                    <Link to={`/productDetails/${product.id}/${product?.category?.name}`}>            
                        <div className='shadow-md p-3 product'>
                            <img src={product.imageCover} alt="" />
                            <span className='text-main text-sm'>{product?.category?.name}</span>
                            <h4 className='font-bold'>{product.title.split(' ').slice(0, 2).join(' ')}</h4>
                            <div className="row justify-between">
                            <span>{product.price} EGP</span>
                            <span><i className='fa-solid fa-star text-yellow-300'></i>{product.ratingsAverage}</span>
                            </div>
                            <button onClick={()=> addProductToCart(product.id)} className='btn bg-main w-full'>
                                {loading && productId == product.id ? <i className="fa-solid fa-spinner fa-spin"></i> 
                                : <span><i className="fa-solid fa-plus"></i> add to Cart <i className="fa-solid fa-cart-shopping"></i></span>}
                            </button>
                        </div>
                    </Link>
                </div>
            )}
        </div>
    </>
}

// we show the product which we click on it by its ID
// in related product i use link to `/productDetails/${product.id}/${product?.category?.name}`
//     => (/) to delete old link path
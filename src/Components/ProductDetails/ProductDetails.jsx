// ProductDetails.jsx
/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Slider from "react-slick";



export default function ProductDetails() {
    const [productDetails, setProductDetails] = useState({})
    let {id}  = useParams()

    // react-slick-slider
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        };

    async function getProductDetails(id) {
        const api = `https://ecommerce.routemisr.com/api/v1/products/${id}`
        let {data} = await axios.get(api)
        setProductDetails(data.data)
    }
    
    useEffect(()=>{
        getProductDetails(id)
    },[])
    return <>
        <div className='row items-center pb-5'>
            <div className="sm:w-1/4 p-2">
                {/* ========== react-slick-slider ========== */}
                <Slider {...settings}>
                    {productDetails?.images?.map((src, i)=>
                        <img key={i} src={src} className='w-full cursor-pointer' alt="" />
                    )}
                </Slider>
            </div>
            <div className="sm:w-3/4">
                <div className='p-5'>
                    <h4 className='text-2xl'>{productDetails.title}</h4>
                    <p className='text-xl text-gray-500'>{productDetails.description}</p>
                    <span className='text-main'>{productDetails.category?.name}</span>
                    <div className="row justify-between mt-3">
                        <span>{productDetails.price} EGP</span>
                        <span><i className='fa-solid fa-star text-yellow-300'></i>{productDetails.ratingsAverage}</span>
                    </div>
                    <button className='btn bg-main w-full'>
                        <i className="fa-solid fa-plus"></i> add to Cart <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>
            </div>
        </div>
    </>
}

// we show the product which we click on it by its ID
// ProductDetails.jsx
/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



export default function ProductDetails() {
    const [productDetails, setProductDetails] = useState({})
    let {id}  = useParams()
    async function getProductDetails(id) {
        const api = `https://ecommerce.routemisr.com/api/v1/products/${id}`
        let {data} = await axios.get(api)
        setProductDetails(data.data)
    }

    useEffect(()=>{
        getProductDetails(id)
    },[])
    return <>
        <div className='row items-center'>
            <div className="sm:w-1/4 p-2">
                <img src={productDetails.imageCover} className='w-full' alt="" />    
            </div>
            <div className="sm:w-3/4">
                <div className='p-5'>
                    <h4 className='text-2xl'>{productDetails.title}</h4>
                    <p className='text-xl text-gray-500'>{productDetails.description}</p>
                    <span className='text-main'>{productDetails.category?.name}</span>
                    <div className="row justify-between">
                        <span>{productDetails.price} EGP</span>
                        <span><i className='fa-solid fa-star text-yellow-300'></i>{productDetails.ratingsAverage}</span>
                    </div>
                    <button className='btn bg-main w-full'><i className="fa-solid fa-plus"></i> add to Cart</button>
                </div>
            </div>
        </div>
    </>
}

// we show the product which we click on it by its ID
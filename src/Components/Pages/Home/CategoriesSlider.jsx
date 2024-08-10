// CategoriesSlider.jsx
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";

export default function CategoriesSlider() {
    const [categories, setCategories] = useState([])
    // react-slick-slider
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 5,
        };

    async function getCategories() {
        const api = `https://ecommerce.routemisr.com/api/v1/categories`
        let {data} = await axios.get(api)
        setCategories(data.data)
    }

    useEffect(()=>{
        getCategories()
    },[])
    return <>
        <h2 className='text-xl text-main'>Shop Popular Categories</h2>
        {/* ========== react-slick-slider ========== */}
        <Slider {...settings} className='mb-4'>
            {categories.map((category, i)=>
                <div key={i}>
                    <img src={category.image} className='h-[100px]' alt="" />
                    <h4>{category.name}</h4>
                </div>
            )}
        </Slider>
    </>
}

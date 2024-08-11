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
        slidesToShow: 8,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows: false,
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
        <h2 className='text-xl text-main mb-2'>Shop Popular Categories</h2>
        {/* ========== react-slick-slider ========== */}
        <Slider {...settings} className='mb-10'>
            {categories.map((category, i)=>
                <div key={i}>
                    <img src={category.image} className='h-[100px]' alt="" />
                    <h4 className='font-light mt-1'>{category.name}</h4>
                </div>
            )}
        </Slider>
    </>
}

// CategoriesSlider.jsx
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import LoadingBars from '../../Components/LoadingBars';

export default function CategoriesSlider() {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
    // react-slick-slider
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows: false,
        initialSlide: 0,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5
                }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 3
                }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 2
                }
            }
        ]
    };

    async function getCategories() {
        setLoading(true)
        const api = `https://ecommerce.routemisr.com/api/v1/categories`
        let {data} = await axios.get(api)
        setCategories(data.data)
        setLoading(false)
    }

    useEffect(()=>{
        getCategories()
    },[])
    return <>
        
        <h2 className='text-xl text-main mb-2'>Shop Popular Categories</h2>
        {/* ========== react-slick-slider ========== */}
        {loading ? <LoadingBars/>
            : <Slider {...settings} className='mb-10'>
                {categories.map((category, i)=>
                    <div key={i}>
                        <img src={category.image} className='h-[150px] w-full' alt="" />
                        <h4 className='font-light mt-1'>{category.name}</h4>
                    </div>
                )}
            </Slider>
        }
    </>
    
}

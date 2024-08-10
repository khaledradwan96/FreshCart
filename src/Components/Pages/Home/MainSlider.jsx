// MainSlider.jsx
/* eslint-disable no-unused-vars */
import React from 'react'
import Slider from "react-slick";
import slider01 from './../../../assets/images/slider-image-2.jpeg'
import slider02 from './../../../assets/images/slider-image-3.jpeg'
import banner01 from './../../../assets/images/grocery-banner.png'
import banner02 from './../../../assets/images/grocery-banner-2.jpeg'

export default function MainSlider() {
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

    return <>
    <div className="row mb-6">
        <div className='w-2/3'>
            {/* ========== react-slick-slider ========== */}
            <Slider {...settings}>
                <img src={slider01}  className='h-[300px]' alt="" />
                <img src={slider02}  className='h-[300px]' alt="" />
            </Slider>
        </div>
        <div className="w-1/3">
            <img src={banner01} className='h-[150px]' alt="" />
            <img src={banner02} className='h-[150px]' alt="" />
        </div>
    </div>
    </>
}

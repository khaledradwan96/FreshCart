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
            <div className='w-full md:w-2/3 mb-10'>
                {/* ========== react-slick-slider ========== */}
                <Slider {...settings}>
                    <img src={slider01}  className='md:h-[300px] w-full' alt="" />
                    <img src={slider02}  className='md:h-[300px] w-full' alt="" />
                </Slider>
            </div>
            <div className="w-full md:w-1/3">
                <img src={banner01} className='md:h-[150px] w-full' alt="" />
                <img src={banner02} className='md:h-[150px] w-full' alt="" />
            </div>
        </div>
    </>
}

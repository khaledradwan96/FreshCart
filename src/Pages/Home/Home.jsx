// Home.jsx
/* eslint-disable no-unused-vars */

import React , { useState , useEffect, useContext} from 'react'
import RecentProducts from './RecentProducts'
import CategoriesSlider from './CategoriesSlider'
import MainSlider from './MainSlider'

export default function Home() {
    return <>
        <div className="container mx-auto">
            <MainSlider/>
            <CategoriesSlider/>
            <RecentProducts/>
        </div>
    </>
}

// Home.jsx
/* eslint-disable no-unused-vars */

import React , { useState , useEffect, useContext} from 'react'
import RecentProducts from './RecentProducts'
import CategoriesSlider from './CategoriesSlider'

export default function Home() {
    return <>
        <div className="container mx-auto">
            <CategoriesSlider/>
            <RecentProducts/>
        </div>
    </>
}

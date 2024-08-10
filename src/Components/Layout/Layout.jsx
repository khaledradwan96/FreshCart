// Layout.jsx
/* eslint-disable no-unused-vars */

import React , { useState , useEffect} from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'


export default function Layout() {
    const [Count, setCount] = useState(0)
    useEffect(()=>{

    }, [])
    return <>
        <NavBar/>
        <div className="container p-2 mx-auto md:pt-20">
            <Outlet/>
        </div>
        <Footer/>
    </>
}

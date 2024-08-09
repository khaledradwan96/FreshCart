// Layout.jsx
/* eslint-disable no-unused-vars */

import React , { useState , useEffect} from 'react'
import style from './Layout.module.css'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'


export default function Layout() {
    const [Count, setCount] = useState(0)
    useEffect(()=>{

    }, [])
    return <>
        <NavBar/>
        <div className="container mx-auto p-32">
            <Outlet/>
        </div>
        <Footer/>
    </>
}

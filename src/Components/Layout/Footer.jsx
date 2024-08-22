// Footer.jsx
/* eslint-disable no-unused-vars */

import React , { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
    const [Count, setCount] = useState(0)
    useEffect(()=>{

    }, [])
    return <>
    <div className='bg-gray-300'>
        <div className="container mx-auto p-4">
            <h2>Footer</h2>
            <li id='social' className='hidden md:block'>
                <Link to='#'><i className='fab p-2 fa-facebook'></i></Link>
                <Link to='#'><i className='fab p-2 fa-youtube'></i></Link>
                <Link to='#'><i className='fab p-2 fa-tiktok'></i></Link>
                <Link to='#'><i className='fab p-2 fa-spotify'></i></Link>
            </li>
        </div>
    </div>
    </>
}

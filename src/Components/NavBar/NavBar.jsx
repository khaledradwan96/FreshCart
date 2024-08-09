// NavBar.jsx
/* eslint-disable no-unused-vars */

import React , { useState , useEffect, useContext} from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/freshcart-logo.svg'
import { CounterContext } from '../../Context/CounterContext'


export default function NavBar() {
    let {count} = useContext(CounterContext)

    return <>
        <nav className='bg-gray-300 md:fixed top-0 left-0 right-0'>
            <div className='p-4 flex flex-col md:flex-row md:justify-between md:items-center'>
                <div className='logo flex flex-col md:flex-row '>
                    <img width={110} src={logo} alt="" />
                    <ul className='flex flex-col md:flex-row'>
                        <li className='p-2'><NavLink to=''>Home</NavLink></li>
                        <li className='p-2'><NavLink to='product'>Products</NavLink></li>
                        <li className='p-2'><NavLink to='cart'>Cart</NavLink></li>
                        <li className='p-2'><NavLink to='brands'>Brands</NavLink></li>
                        <li className='p-2'><NavLink to='categories'>Categories</NavLink></li>
                    </ul>
                </div>
                <div>
                    <ul className='flex flex-col md:flex-row md:items-center'>
                        <li className='p-2'><NavLink to='register'>Register</NavLink></li>
                        <li className='p-2'><NavLink to='login'>Login</NavLink></li>
                        <li className='p-2'><NavLink>Logout</NavLink></li>
                        <li>
                            <i className='fab p-2 fa-facebook'></i>
                            <i className='fab p-2 fa-youtube'></i>
                            <i className='fab p-2 fa-tiktok'></i>
                            <i className='fab p-2 fa-spotify'></i>
                        </li>
                    </ul> 
                </div>
            </div>
            <h4>Count: {count}</h4>
        </nav>
    </>
}

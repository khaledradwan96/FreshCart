// NavBar.jsx
/* eslint-disable no-unused-vars */

import React , { useState , useEffect, useContext} from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/freshcart-logo.svg'
import { UserContext } from '../../Context/UserContext'
import './NavBar.css'

export default function NavBar() {
    let  {userLogin, setUserLogin} = useContext(UserContext)
    let navigate = useNavigate()

    function logOut(){
        localStorage.removeItem('userToken') // remove data from localStorage
        setUserLogin(null) // remove data from context
        navigate('/login')
    }

    function navbarShow(){
        console.log('hi')
        let navbarContainer = document.getElementById('navbarContainer')
        console.log(navbarContainer)
        navbarContainer.classList.toggle('hidden')
    }

    return <>
        <nav className='bg-gray-300 fixed top-0 left-0 right-0 z-50'>
            <div className='container mx-auto p-4 flex flex-wrap flex-row justify-between items-center'>
                <div className='w-full sm:w-fit flex flex-row justify-between'>
                    <Link to='' className='logo p-2'><img width={110} src={logo}/></Link>
                    <button className='sm:hidden' onClick={navbarShow}>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>
                <div id='navbarContainer' className='hidden sm:flex sm:flex-row'>
                    <ul id='navbar' className='flex flex-col sm:flex-row'>
                        {userLogin !== null ? 
                            <>
                                <li className='p-2'><NavLink to='cart'>Cart</NavLink></li>
                                <li className='p-2'><NavLink to='products'>Products</NavLink></li>
                                <li className='p-2'><NavLink to='categories'>Categories</NavLink></li>                        
                                <li className='p-2'><NavLink to='brands'>Brands</NavLink></li>
                            </> : null}
                    </ul>
                    <ul className='flex flex-row items-center'>
                        <li id='social' className='hidden md:block'>
                                <Link to='#'><i className='fab p-2 fa-facebook'></i></Link>
                                <Link to='#'><i className='fab p-2 fa-youtube'></i></Link>
                                <Link to='#'><i className='fab p-2 fa-tiktok'></i></Link>
                                <Link to='#'><i className='fab p-2 fa-spotify'></i></Link>
                            </li>
                        {userLogin === null ? 
                            <>
                                <li className='p-2 me-2 border border-green-700 hover:bg-green-700 rounded-lg text-white duration-300'>
                                    <Link to='register'>Register</Link></li>
                                <li className='p-2 border border-green-700 hover:bg-green-700 rounded-lg text-white duration-300'>
                                    <Link to='login'>Login</Link></li>
                            </> : 
                                <li className='p-2 border border-green-700 hover:bg-green-700 rounded-lg text-white duration-300'>
                                    <Link onClick={logOut}>Logout</Link></li>
                            }
                    </ul> 
                </div>
            </div>
        </nav>
    </>
}

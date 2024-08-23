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

    function navbarToggle(){
        let navbarContainer = document.getElementById('navbarContainer')
        navbarContainer.classList.toggle('hidden')
        let registerContainer = document.getElementById('registerContainer')
        registerContainer.classList.toggle('hidden')
    }

    function navBarFixed(){
        let mainHeaderHeight = document.getElementById('mainHeader').offsetHeight
        let navContainer = document.getElementById('navContainer')
        if(window.scrollY > mainHeaderHeight){
            navContainer.classList.add('fixed')
        }else{
            navContainer.classList.remove('fixed')
        }
    }
    window.addEventListener('scroll', navBarFixed)
    
    return <>
        <header id='mainHeader' className='bg-black text-white p-3'>
            <div className='flex justify-center items-center relative'>
                <h3 className='w-2/4 text-center'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    <Link to='' className='ms-2 underline font-bold'>ShopNow</Link>
                </h3>
                <div className='absolute right-5'>
                    <select className='bg-black'>
                        <option>English</option>
                        <option>Germany</option>
                        <option>عربي</option>
                    </select>
                </div>
            </div>
        </header>

        <nav id='navContainer' className='bg-gray-200 top-0 left-0 right-0 z-50'>
            <div className='container mx-auto p-4 flex flex-wrap flex-col lg:flex-row lg:justify-between lg:items-center'>
                <div className='w-full lg:w-fit flex flex-row justify-between'>
                    <Link to='' className='logo p-2'><img width={150} src={logo}/></Link>
                    <button className='lg:hidden' onClick={navbarToggle}>
                        <i className="fa-solid fa-bars text-2xl"></i>
                    </button>
                </div>
                <div id='navbarContainer' className='hidden lg:flex'>
                    <ul id='navbar' className='flex flex-col lg:flex-row'>
                        {userLogin !== null ? 
                            <>
                                <li className='p-2'><NavLink to=''>Home</NavLink></li>
                                <li className='p-2'><NavLink to='contact'>Contact</NavLink></li>
                                <li className='p-2'><NavLink to='about'>About</NavLink></li>
                                <li className='p-2'><NavLink to='products'>Products</NavLink></li>
                                <li className='p-2'><NavLink to='categories'>Categories</NavLink></li>                        
                                <li className='p-2'><NavLink to='brands'>Brands</NavLink></li>
                            </> : null}
                    </ul>
                </div>
                <div id='registerContainer' className='hidden lg:flex'>
                    <ul className='flex flex-row justify-center items-center'>
                        {userLogin === null ? 
                            <>
                                <li className='p-2 me-2 border border-green-700 hover:bg-green-700 rounded-lg hover:text-white duration-300'>
                                    <Link to='register'>Register</Link>
                                </li>
                                <li className='p-2 border border-green-700 hover:bg-green-700 rounded-lg hover:text-white duration-300'>
                                    <Link to='login'>Login</Link>
                                </li>
                            </> : 
                            <>
                                <li id='whish'>
                                    <button>
                                        <Link to='wishlist' className="relative p-3">
                                            <i className="fa-regular fa-heart text-red-700 text-xl"></i>
                                            <span id="wishCount" 
                                            className="absolute inline-flex items-center justify-center w-7 h-7 font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                                            0
                                            </span>
                                        </Link>
                                    </button>
                                </li>
                                <li id="cart">
                                    <button type="button" className="relative p-3">
                                        <Link to='cart'>
                                            <i className="fa-solid fa-cart-shopping text-gray-700 text-xl" />
                                            <span id="cartCount" 
                                            className="absolute inline-flex items-center justify-center w-7 h-7 font-bold text-white bg-green-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                                            0
                                            </span>
                                        </Link>
                                    </button>
                                </li>
                                <li id="user" className="">
                                    <button type="button" className="relative p-3">
                                        <Link to='account'>
                                            <i className="fa-solid fa-user  text-gray-700 text-xl"></i>
                                        </Link>
                                    </button>
                                </li>
                                <li className='p-2 border border-green-700 hover:bg-green-700 rounded-lg hover:text-white duration-300'>
                                    <Link onClick={logOut}>Logout</Link>
                                </li>
                            </>
                            }
                    </ul> 
                </div>
            </div>
        </nav>
    </>
}

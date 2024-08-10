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

    return <>
        <nav className='bg-gray-300 md:fixed top-0 left-0 right-0 z-50'>
            <div className='container mx-auto p-4 flex flex-col md:flex-row md:justify-between md:items-center'>
                <div className='logo flex flex-col md:flex-row '>
                    <Link to='' className='p-2'><img width={110} src={logo}/></Link>
                    <ul id='navbar' className='flex flex-col md:flex-row'>
                        {userLogin !== null ? 
                            <>
                                <li className='p-2'><NavLink to='cart'>Cart</NavLink></li>
                                <li className='p-2'><NavLink to='products'>Products</NavLink></li>
                                <li className='p-2'><NavLink to='categories'>Categories</NavLink></li>                        
                                <li className='p-2'><NavLink to='brands'>Brands</NavLink></li>
                            </> : null}
                    </ul>
                </div>
                <div>
                    <ul id='social' className='flex flex-col md:flex-row md:items-center'>
                        <li className='hidden md:block'>
                                <Link to='#'><i className='fab p-2 fa-facebook'></i></Link>
                                <Link to='#'><i className='fab p-2 fa-youtube'></i></Link>
                                <Link to='#'><i className='fab p-2 fa-tiktok'></i></Link>
                                <Link to='#'><i className='fab p-2 fa-spotify'></i></Link>
                            </li>
                        {userLogin === null ? 
                            <>
                                <li className='p-2'><Link to='register'>Register</Link></li>
                                <li className='p-2'><Link to='login'>Login</Link></li>
                            </> : 
                                <li className='p-2'><Link onClick={logOut}>Logout</Link></li>
                        }
                    </ul> 
                </div>
            </div>
        </nav>
    </>
}

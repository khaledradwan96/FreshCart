// Home.jsx
/* eslint-disable no-unused-vars */

import React , { useState , useEffect, useContext} from 'react'
import Product from '../Product/Product'
import Cart from '../Cart/Cart'
import { CounterContext } from '../../Context/CounterContext'
import RecentProducts from './RecentProducts'

export default function Home() {
    let {count, setcount, userName, setuserName} = useContext(CounterContext)
    return <>
        <div className="container mx-auto">
            <h2>Home</h2>
            <RecentProducts/>
        </div>
    </>
}

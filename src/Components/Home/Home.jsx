// Home.jsx
/* eslint-disable no-unused-vars */

import React , { useState , useEffect, useContext} from 'react'
import Product from '../Product/Product'
import Cart from '../Cart/Cart'
import { CounterContext } from '../../Context/CounterContext'

export default function Home() {
    let {count, setcount, userName, setuserName} = useContext(CounterContext)
    return <>
        <div className="py-10">
            <h2>Home</h2>
        </div>
    </>
}

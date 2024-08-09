// Product.jsx
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React , { useState , useEffect} from 'react'
import style from './Product.module.css'

export default function Product(props) {
    const [Count, setCount] = useState(0)
    useEffect(()=>{
    }, [])
    return <>
        <h2>Product</h2>
    </>
}

/* eslint-disable no-unused-vars */
// RecentProducts.jsx
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function RecentProducts() {
  const [recentProducts, setRecentProducts] = useState([])
  async function getRecentProducts(){
    const api = 'https://ecommerce.routemisr.com/api/v1/products'
    let {data} = await axios.get(api)
    setRecentProducts(data.data)
  }
  useEffect(()=>{
    getRecentProducts()
  },[])
  return <>
    <h4>Recent Products</h4>
    <div className="row">
      <div className="w-1/6 px-5">
        <img src="" alt="" />
        <span>Category</span>
      </div>
    </div>
  </>
}

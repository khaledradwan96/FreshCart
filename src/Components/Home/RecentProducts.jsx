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
  }, [])
  return <>
    <div className="row">
      {recentProducts.map((product)=>
            <div key={product.id} className="md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
              <div className='shadow-md p-3 product'>
                <img src={product.imageCover} alt="" />
                <span className='text-main text-sm'>{product.category.name}</span>
                <h4 className='font-bold'>{product.title.split(' ').slice(0,2).join(' ')}</h4>
                <div className="row justify-between">
                  <span>{product.price} EGP</span>
                  <span><i className='fa-solid fa-star text-yellow-300'></i>Rate</span>
                </div>
              </div>
            </div>
      )}
    </div>
  </>
}

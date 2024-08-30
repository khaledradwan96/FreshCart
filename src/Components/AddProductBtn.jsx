// AddProductBtn.jsx
/* eslint-disable no-unused-vars */

import { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext';
import { useParams } from 'react-router-dom'


export default function AddProductBtn() {
  const [btnLoading, setBtnLoading] = useState(false)
  let {addProduct} = useContext(CartContext)

  async function addProductToCart(productId) {
    setBtnLoading(true)
    console.log('hi')
    let response = await addProduct(productId)
    console.log(response)
    setBtnLoading(false)
  }

  return <>
      <button onClick={()=> addProductToCart('6428ebc6dc1175abc65ca0b9')} className='btn bg-main w-full'>
        {btnLoading ? <i className="fa-solid fa-spinner fa-spin"></i> 
          : <span><i className="fa-solid fa-plus"></i> add to Cart <i className="fa-solid fa-cart-shopping"></i></span>}
      </button>
  
  </>
}

// => In Future I will try to make AddProductBtn as a compound and make it show in all screen
// RecentProducts.jsx

import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LoadingInfinity from '../../Components/LoadingInfinity';
import { CartContext } from '../../Context/CartContext';
import { toast } from 'react-hot-toast';


export default function RecentProducts() {
  let {addProduct, setCartCount} = useContext(CartContext)
  const [loading, setLoading] = useState(false)
  const [btnLoading, setBtnLoading] = useState(false)
  const [productId, setProductId] = useState(null)
  const [recentProducts, setRecentProducts] = useState([])

  async function getRecentProducts(){
    setLoading(true)
    const api = 'https://ecommerce.routemisr.com/api/v1/products'
    let {data} = await axios.get(api)
    setRecentProducts(data.data)
    setLoading(false)
  }

  async function addProductToCart(productId) {
    setBtnLoading(true)
    setProductId(productId)
    let response = await addProduct(productId)
    if(response.data.status == 'success'){
      setCartCount(response.data)
      toast.success(response.data.message, {
        duration: 3000,
        position: 'top-center',
        style: {
          minWidth: '370px',
        }
      });
    }else{
      toast.error(response.data.message);
    }
    setBtnLoading(false)
  }

  useEffect(()=>{
    getRecentProducts()
  }, [])

  return <>
    <div className="row">
      {loading ? <LoadingInfinity/> :
        recentProducts.map((product)=>
          <div key={product.id} className="md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
                <div className='shadow-md p-3 product rounded-md'>
                  <Link to={`productDetails/${product.id}/${product?.category?.name}`}>            
                      <img src={product.imageCover} alt="" />
                      <span className='text-main text-sm'>{product?.category?.name}</span>
                      <h4 className='font-bold'>{product.title.split(' ').slice(0, 2).join(' ')}</h4>
                      <div className="row justify-between">
                        <span>{product.price} EGP</span>
                        <span><i className='fa-solid fa-star text-yellow-300'></i>{product.ratingsAverage}</span>
                      </div>
                  </Link>
                  <button onClick={()=> addProductToCart(product.id)} className='btn bg-main w-full'>
                    {btnLoading && productId == product.id ? <i className="fa-solid fa-spinner fa-spin"></i> 
                      : <span><i className="fa-solid fa-plus"></i> add to Cart <i className="fa-solid fa-cart-shopping"></i></span>}
                  </button>
                </div>
          </div>
        )
      }
    </div>
  </>
}

// => I use Link in product to can go to productDetails
// => user can add product to cart by click on button using addProductToCart(product.id)

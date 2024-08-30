// RecentProducts.jsx

import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LoadingInfinity from '../../Components/LoadingInfinity';
import { CartContext } from '../../Context/CartContext';
import { WishContext } from '../../Context/WishContext';
import { toast } from 'react-hot-toast';


export default function RecentProducts() {
  let {addProduct, setCartCount} = useContext(CartContext)
  let {addToWish, wishItems, setWishItems} = useContext(WishContext)
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
        position: 'top-right',
        style: {
          minWidth: '370px',
        }
      });
    }else{
      toast.error(response.data.message);
    }
    setBtnLoading(false)
  }

  async function addProductToWish(productId) {
    setProductId(productId)
    let response = await addToWish(productId)
    setWishItems(response?.data.data)
    console.log(response.data.data)
    if(response.data.status == 'success'){
      toast.success(response.data.message, {
        position: 'top-right',
        style: {
          minWidth: '400px',
        }
      });
    }else{
      toast.error(response.data.message);
    }
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
                  <div className='flex flex-row items-center'>
                    <button onClick={()=> addProductToCart(product.id)} className='btn bg-main w-full'>
                      {btnLoading && productId == product.id ? <i className="fa-solid fa-spinner fa-spin"></i> 
                        : <span><i className="fa-solid fa-plus"></i> Add to Cart </span>}
                    </button>
                    <button onClick={()=> addProductToWish(product.id)}>
                      <span>
                        {wishItems?.find((item)=> item == product.id) ?
                          <i className="fa-solid fa-heart fa-xl ms-5 text-red-600"></i>
                          :
                          <i className="fa-solid fa-heart fa-xl ms-5"></i>
                        }
                      </span>
                    </button>
                  </div>
                </div>
          </div>
        )
      }
    </div>
  </>
}

// => I use Link in product to can go to productDetails
// => user can add product to cart by click on button using addProductToCart(product.id)

// => need to handel when user click on heart to remove item from wish list
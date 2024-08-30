// Wishlist.jsx
/* eslint-disable no-unused-vars */

import { useState , useEffect, useContext} from 'react'
import { WishContext } from '../Context/WishContext';
import { CartContext } from '../Context/CartContext';
import LoadingBars from '../Components/LoadingBars';
import { toast } from 'react-hot-toast';
import AddressTitle from '../Components/AddressTitle'



export default function Wishlist() {
    let {getLoggedWishlist, deleteWish,  wishItems, setWishItems} = useContext(WishContext)
    let {addProduct, setCartCount} = useContext(CartContext)
    const [loading, setLoading] = useState(false)
    const [productId, setProductId] = useState(null)


    async function getWishItems(){
        setLoading(true)
        let response = await getLoggedWishlist()
        setWishItems(response?.data?.data)
        setLoading(false)
    }

    async function deleteWishItem(productId) {
        let response = await deleteWish(productId)
        setWishItems(response?.data?.data)
    }

    async function addProductToCart(productId) {
        setProductId(productId)
        let response = await addProduct(productId)
        if(response.data.status == 'success'){
            setCartCount(response.data)
            deleteWishItem(productId)
            toast.success(response.data.message, {
                position: 'top-right',
                style: {
                minWidth: '370px',
                }
            });
            }else{
                toast.error(response.data.message);
            }
    }

    useEffect(()=>{
        getWishItems()
    }, [])
    
    return <>
        <AddressTitle/>
        <h2 className='text-2xl font-bold text-main mb-3 text-center'>My Wish List</h2>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            {loading ? <LoadingBars/> : ''}
            <table className="text-center w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr className='font-bold'>
                        <th scope="col" className="px-16 py-3"><span className="sr-only">Image</span></th>
                        <th scope="col" className="px-6 py-3 font-bold">Title</th>
                        <th scope="col" className="px-6 py-3 font-bold">Price</th>
                        <th scope="col" className="px-6 py-3 font-bold">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {wishItems?.map((product)=>
                        <tr key={product?.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            {/* ========== Product img ========== */}
                            <td className="p-4">
                                <img src={product.imageCover} className="w-16 md:w-32 max-w-full max-h-full mx-auto" />
                            </td>
                            {/* ========== Product Title ========== */}
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                {product.title}
                            </td>
                            {/* ========== Product Price ========== */}
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                {product.price}
                            </td>
                            {/* ========== Product Delete ========== */}
                            <td className="px-6 py-4">
                                <button onClick={()=> deleteWishItem(product.id)}>
                                    <span className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer">Remove</span>
                                </button>
                                <button onClick={()=> addProductToCart(product.id)} className='btn bg-main w-full'>
                                    <span><i className="fa-solid fa-plus"></i> add to Cart <i className="fa-solid fa-cart-shopping"></i></span>
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </>
}

// ===> need more handel when remove or add
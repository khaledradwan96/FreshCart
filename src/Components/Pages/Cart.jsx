// Cart.jsx

import { useState , useEffect , useContext} from 'react'
import { CartContext } from '../../Context/CartContext';
import LoadingSpain from '../Pages/LoadingSpain';
import { toast } from 'react-hot-toast';

export default function Cart() {
    const [loading, setLoading] = useState(false)
    let {getLoggedCart, updateProduct} = useContext(CartContext)
    const [cartItems, setCartItems] = useState(null)

    async function getCartItems(){
        setLoading(true)
        let response = await getLoggedCart()
        setCartItems(response?.data?.data)
        setLoading(false)
    }

    async function updateCartProduct(productId, count) {
        let response = await updateProduct(productId, count)
        setCartItems(response?.data?.data)
        if(response.data.status == 'success'){
            toast.success('Product updated success', {
                position: 'bottom-center',
            });
        }else{
            toast.error(response.data.status);
        }
    }

    useEffect(()=> {
        getCartItems()
    },[])

    return <>
        <h2 className='text-2xl font-bold text-main mb-3'>Shop Now</h2>
        
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            {loading ? <LoadingSpain/> : ''}
            <table className="text-center w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr className='font-bold'>
                        <th scope="col" className="px-16 py-3"><span className="sr-only">Image</span></th>
                        <th scope="col" className="px-6 py-3 font-bold">Product</th>
                        <th scope="col" className="px-6 py-3 font-bold">Quantity</th>
                        <th scope="col" className="px-6 py-3 font-bold">Price</th>
                        <th scope="col" className="px-6 py-3 font-bold">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems?.products.map((product)=>
                        <tr key={product.product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="p-4">
                                <img src={product.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full mx-auto" alt="Apple Watch" />
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                {product.product.title}
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center justify-center">
                                    <button onClick={()=> updateCartProduct(product.product.id, product.count - 1)} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                        <i className="fa-solid fa-minus"></i>
                                    </button>
                                    <div><span>{product.count}</span></div>
                                    <button onClick={()=> updateCartProduct(product.product.id, product.count + 1)} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                        <i className="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                {product.price} EGP
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <h3 className='text-xl font-bold text-gray-500 text-center p-5 w-full mx-auto'>
                    Total Price is <span className='text-main'>{cartItems?.totalCartPrice} EGY</span>
                    </h3> 
        </div>
    </>
}

// Cart.jsx

import { useState , useEffect , useContext} from 'react'
import { CartContext } from '../Context/CartContext';
import LoadingBars from '../Components/LoadingBars';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import AddressTitle from '../Components/AddressTitle';

export default function Cart() {
    const [loading, setLoading] = useState(false)
    let {getLoggedCart, updateProduct, deleteProduct, clearCart, cartCount, setCartCount} = useContext(CartContext)
    const [cartItems, setCartItems] = useState(null)
    let items = 0
    
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
            toast.success('Cart updated success', {
                position: 'top-right',
            });
        }else{
            toast.error(response.data.status);
        }
        for(let i = 0 ; i < response.data.data.products.length; i++){
            if(response.data.data.products[i].count < 0){
                deleteCartProduct(productId)
            }
        }
    }

    async function deleteCartProduct(productId) {
        let response = await deleteProduct(productId)
        setCartItems(response?.data?.data)
        setCartCount(response.data)
        if(response.data.status == 'success'){
            toast.success('Product deleted success', {
                position: 'top-right',
                style:{
                    background: 'red',
                    color: 'white',
                    fontWeight: 'bold'
                }
            });
        }else{
            toast.error(response.data.status);
        }
    }

    async function clearAllProducts() {
        let response = await clearCart()
        setCartItems(null)
        setCartCount(0)
        if(response.data.message == 'success'){
            toast.success('Cart is Cleared', {
                position: 'top-right',
                style:{
                    background: 'red',
                    color: 'white',
                    fontWeight: 'bold'
                }
            });
        }else{
            toast.error(response.data.message);
        }
    }

    useEffect(()=> {
        getCartItems()
    },[])

    return <>
        <AddressTitle/>
        <h2 className='text-2xl font-bold text-main mb-3 text-center'>Cart Shop</h2>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            {loading ? <LoadingBars/> : ''}
            <table className="text-center w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr className='font-bold'>
                        <th scope="col" className="px-16 py-3"><span className="sr-only">Image</span></th>
                        <th scope="col" className="px-6 py-3 font-bold">Product</th>
                        <th scope="col" className="px-6 py-3 font-bold">Price</th>
                        <th scope="col" className="px-6 py-3 font-bold">Quantity</th>
                        <th scope="col" className="px-6 py-3 font-bold">Subtotal</th>
                        <th scope="col" className="px-6 py-3 font-bold">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems?.products.map((product)=>
                        <tr key={product.product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            {/* ========== Product img ========== */}
                            <td className="p-4">
                                <img src={product.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full mx-auto" />
                            </td>
                            {/* ========== Product Title ========== */}
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                {product.product.title}
                            </td>
                            {/* ========== Product Price ========== */}
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                {product.price}
                            </td>
                            {/* ========== Product Count ========== */}
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
                            {/* ========== Product Subtotal ========== */}
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                {product.price * product.count}
                            </td>
                            {/* ========== Product Delete ========== */}
                            <td className="px-6 py-4">
                                <span onClick={()=> deleteCartProduct(product.product.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer">Remove</span>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div id='total'>
                <div className='flex'>
                    <h3 className='text-xl font-bold text-gray-500 text-center p-5 w-full mx-auto'>
                        Number Of Cart Items <span className='text-main'>{cartCount.numOfCartItems}</span>
                    </h3> 
                    <h3 className='text-xl font-bold text-gray-500 text-center p-5 w-full mx-auto'>
                        Total Number Of Cart Items: 
                        <span className='text-main ms-1'>
                            {cartItems?.products.map((product)=>
                                {items += product.count}
                            )}
                            {items}
                        </span>
                    </h3> 
                </div>
                <h3 className='text-xl font-bold text-gray-500 text-center p-5 w-full mx-auto'>
                        Total Price is <span className='text-main'>{cartItems?.totalCartPrice} EGY</span>
                </h3> 
            </div>
            <button className='btn w-full bg-main'>
                <Link to={'/checkout'}>Check Out</Link>
            </button>
        </div>

        <button className='hover:bg-red-600 hover:mx-5 hover:text-white px-5 py-3 mt-5 rounded-md border border-red-600 duration-300'
                onClick={clearAllProducts}>
                Clear Your Cart
        </button>
    </>
}

// Checkout.jsx

import { useFormik } from 'formik'
import { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext'
import AddressTitle from '../Components/AddressTitle'


export default function Checkout() {
    let {checkoutCart, cartId} = useContext(CartContext)
    const [loading, setLoading] = useState(false)

    let user = {
        details: '',
        city: '',
        phone: ''
    }

    let formik = useFormik({
        initialValues: user,
        onSubmit: ()=>{
            handleCheckout(cartId, 'http://localhost:5174')
        },
    })

    async function handleCheckout(cartId, url){
        setLoading(true)
        let response = await  checkoutCart(cartId, url, formik.values)
        if(response.data.status == 'success'){
            window.location.href = response.data.session.url
        }
        setLoading(false)
    }

    return <>
        <AddressTitle/>
        <div className='mx-auto'>
            <h2 className='font-bold text-4xl text-main text-center'>Checkout</h2>
            <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto py-5">
                {/* ========== Details input ========== */}
                <div className="relative z-0 w-full mb-5 group mt-5">
                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} 
                        value={formik.values.details} type="text" name="details" id="details" 
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=''/>
                    <label htmlFor="details" 
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Enter Your Details</label>
                </div>
                {/* ========== Phone input ========== */}
                <div className="relative z-0 w-full mb-5 group mt-5">
                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} 
                        value={formik.values.phone} type="tel" name="phone" id="phone" 
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=''/>
                    <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Enter Your Phone</label>
                </div>
                {/* ========== City input ========== */}
                <div className="relative z-0 w-full mb-5 group mt-5">
                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} 
                        value={formik.values.city} type="text" name="city" id="city" 
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=''/>
                    <label htmlFor="city" 
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Enter Your City</label>
                </div>
                {/* ========== Submit input ========== */}
                <button type="submit" 
                        className="text-white bg-main hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        {loading ? 
                            <i className='fa-solid fa-spinner px-1 fa-spin'></i> 
                            : 'Pay Now'}
                </button>
            </form>
        </div>
    </>
}

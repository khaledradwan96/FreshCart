/* eslint-disable no-unused-vars */
// Login.jsx

import axios from 'axios'
import { useFormik } from 'formik'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yap from 'yup'
import { UserContext } from '../../Context/UserContext'

export default function Login() {
    let {setUserLogin} = useContext(UserContext)
    let navigate = useNavigate()
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    let user = {
        email: '',
        password: '',
    }
    async function submitForm(val){
        setLoading(true) // make submit start loading
        // Call api
        const api = 'https://ecommerce.routemisr.com/api/v1/auth/signin'
        let response = await axios.post(api, val)
            .then((resp)=>{ 
                localStorage.setItem('userToken', resp?.data?.token) // storage token in localStorage
                setUserLogin(resp?.data?.token) // storage token in Context
                navigate('/') // to go home page
                setLoading(false) // make submit stop loading
            })
            .catch((resp)=>{
                setError(resp?.response?.data.message)
                setLoading(false)
            })
    }
    let validate = Yap.object().shape({
        email: Yap.string()
                .required('Email is required')
                .email('invalid email'),
        password: Yap.string()
                .required('Password is required')
                .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, 'invalid password')
    })
    let formik = useFormik({
        initialValues: user,
        onSubmit: submitForm,
        validationSchema: validate
    })

    return <>
        <div className='mx-auto'>
            <h2 className='font-bold text-4xl text-main text-center'>Login</h2>
            <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto py-5">
                        {/* ========== Email input ========== */}
                <div className="relative z-0 w-full mb-5 group mt-5">
                    <input onChange={formik.handleChange} onBlur={formik.handleBlur}
                        value={formik.values.email} type="email" name="email" id="email" 
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=''/>
                    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Email</label>
                    {formik.errors.email && formik.touched.email ? 
                        <div className="flex items-center p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-red-200 dark:text-red-900" role="alert">
                            <div>{formik.errors.email}</div>
                        </div>
                    : null}
                </div>
                        {/* ========== Password input ========== */}
                <div className="relative z-0 w-full mb-5 group mt-5">
                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} 
                        value={formik.values.password} type="password" name="password" id="password" 
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=''/>
                    <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Password</label>
                    {formik.errors.password && formik.touched.password ? 
                        <div className="flex items-center p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-red-200 dark:text-red-900" role="alert">
                            <div>{formik.errors.password}</div>
                        </div>
                    : null}
                </div>
                        {/* ========== Submit input ========== */}
                <button type="submit" 
                        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        {loading ? 
                            <i className='fa-solid fa-spinner px-1 fa-spin'></i> 
                            : 'Submit'}
                </button>
                {error ?
                    <div className="flex items-center p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-red-200 dark:text-red-900" role="alert">
                        <div>{error}</div>
                    </div>
                : null}
            </form>
        </div>
    </>
}

// ForgetPassword.jsx
/* eslint-disable no-unused-vars */

import React , { useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useFormik } from 'formik'
import * as Yap from 'yup'
import AddressTitle from '../../Components/AddressTitle'
export default function ForgetPassword() {
    const [loading, setLoading] = useState(false)
    const [loading2, setLoading2] = useState(false)
    const [error, setError] = useState(null)
    let navigate = useNavigate()
    let user = {
        email: ''
    }

    // validation regex
    let validate = Yap.object().shape({
        email: Yap.string()
                .required('Email is required')
                .email('invalid email'),
    })

    let formik = useFormik({
        initialValues: user,
        onSubmit: submitForm,
        validationSchema: validate
    })

    async function submitForm(val){
        setLoading(true)
        // Call API
        const api = 'https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords'
        let response = await axios.post(api, val)
        let formVerifyCode = document.getElementById('formVerifyCode')
        formVerifyCode.classList.remove('hidden')
        let resultSendCode = document.getElementById('resultSendCode')
        resultSendCode.innerHTML = response?.data?.message
        setLoading(false)
    }

    async function verifyCode(){
        setLoading2(true)
        let verifyCode = document.getElementById('verifyCode').value
        const api = 'https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode'
        let response = await axios.post(api, {
            "resetCode": verifyCode
        })
            .then((resp)=>{
                navigate('../ResetPassword')
                setLoading2(false)
            })
            .catch((resp)=>{
                console.log('Wrong')
                let resultVerifyCode = document.getElementById('resultVerifyCode')
                resultVerifyCode.innerHTML = 'Wrong Code'
                setLoading2(false)
            })
        }

    return <>
        <h2 className='text-2xl font-bold text-center text-green-600 mb-3'>Forget Password</h2>
        <form onSubmit={formik.handleSubmit} className="py-5">
            <h3 className='text-xl font-bold'>Please enter your email</h3>
            {/* ========== Email input ========== */}
            <div className="relative z-0 w-full mb-5 group mt-3">
                <input onChange={formik.handleChange} onBlur={formik.handleBlur}
                    value={formik.values.email} type="email" name="email" id="email" 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=''/>
                <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                {formik.errors.email && formik.touched.email ? 
                    <div className="flex items-center p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-red-200 dark:text-red-900" role="alert">
                        <div>{formik.errors.email}</div>
                    </div>
                : null}
            </div>
            {/* ========== Submit input ========== */}
            <div className='flex flex-row items-center justify-between'>
                <button type="submit"
                    className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    {loading ? 
                        <>
                        Send Code <i className='fa-solid fa-spinner px-1 fa-spin'></i> 
                        </>
                        : 'Send Code'}
                </button>
                <p id='resultSendCode' className='text-lg font-bold text-green-600'></p>
            </div>
            {error ?
                <div className="flex items-center p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-red-200 dark:text-red-900" role="alert">
                    <div>{error}</div>
                </div>
            : null}
        </form>

        <div className='hidden' id='formVerifyCode'>
            <h3 className='text-xl font-bold'>Please enter verify code</h3>
            {/* ========== verify-code input ========== */}
            <div className="relative z-0 w-full mb-5 group mt-5">
                <input type="text" name="verifyCode" id="verifyCode" 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=''/>
                <label htmlFor="verifyCode" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Code
                </label>
            </div>
            {/* ========== Submit input ========== */}
            <div className='flex flex-row items-center justify-between'>
                <button type="submit" onClick={verifyCode}
                    className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    {loading2 ? 
                        <>
                            Verify <i className='fa-solid fa-spinner px-1 fa-spin'></i> 
                        </>
                        : 'Verify'}
                </button>
                <p id='resultVerifyCode' className='text-lg font-bold text-red-600'></p>
            </div>
        </div>
    </>
}

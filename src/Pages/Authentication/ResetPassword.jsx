// ResetPassword.jsx
/* eslint-disable no-unused-vars */

import axios from 'axios'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'

export default function ResetPassword() {
    let {setUserLogin} = useContext(UserContext)
    let navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    async function resetPassword(e){
        e.preventDefault()
        let userEmail = document.getElementById('newEmail').value
        let newPassword =  document.getElementById('newPassword').value
        setLoading(true)
        const api = 'https://ecommerce.routemisr.com/api/v1/auth/resetPassword'
        let response = await axios.put(api, {
            'email' : userEmail,
            'newPassword' : newPassword
        })
        .then((resp)=>{
            localStorage.setItem('userToken', resp?.data?.token)
            setUserLogin(resp?.data?.token)
            navigate('../login')
            setLoading(false)
        })
        .catch((resp)=>{
            let resultReset = document.getElementById('resultReset')
            resultReset.innerHTML = resp?.response?.data.message
            setLoading(false)
        })
    }

    return <>
        <div className='mx-auto'>
            <h2 className='font-bold text-4xl text-main text-center'>Reset Password</h2>
            <form  className="max-w-md mx-auto py-5" noValidate>
                {/* ========== Email input ========== */}
                <div className="relative z-0 w-full mb-5 group mt-5">
                    <input type="email" name="newEmail" id="newEmail" 
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=''/>
                    <label htmlFor="newEmail" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Email
                    </label>
                </div>
                {/* ========== New Password input ========== */}
                <div className="relative z-0 w-full mb-5 group mt-5">
                    <input type="password" name="newPassword" id="newPassword" minLength={6}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=''/>
                    <label htmlFor="newPassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        New Password
                    </label>
                </div>
                {/* ========== Submit input ========== */}
                <div className='flex flex-row items-center justify-between'>
                    <button type="submit" onClick={resetPassword}
                            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            {loading ? 
                                <>
                                    Reset Password <i className='fa-solid fa-spinner px-1 fa-spin'></i> 
                                </>
                                : 'Reset Password'}
                    </button>
                <p id='resultReset' className='text-lg font-bold text-red-600'></p>
                </div>
            </form>
        </div>
    </>
}


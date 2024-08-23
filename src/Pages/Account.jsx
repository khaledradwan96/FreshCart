// Account.jsx
/* eslint-disable no-unused-vars */

import React , { useState , useEffect} from 'react'

export default function Account() {
    const [Count, setCount] = useState(0)
    useEffect(()=>{

    }, [])
    return <>
        <div className='flex justify-between mb-20'>
            <div>
                <span className='text-[#00000080]'>Home / </span>
                <span className='text-black'>My Account</span>
            </div>
            <div>
                <span>Welcome !</span>
                <span id='userName'></span>
            </div>
        </div>
        <div className='flex flex-col sm:flex-row gap-12 sm:gap-4 justify-between'>
            <div className='border rounded sm:border-none py-3 px-6 sm:py-0 sm:px-0'>
                <h3 className='font-bold'>Manage My Account</h3>
                <nav className='flex flex-col gap-1 text-[#00000050] ms-5 mt-3 mb-5'>
                    <a href="#" className='hover:text-[#DB4444] hover:font-bold duration-300'>My Profile</a>
                    <a href="#" className='hover:text-[#DB4444] hover:font-bold duration-300'>Address Book</a>
                    <a href="#" className='hover:text-[#DB4444] hover:font-bold duration-300'>My Payment Options</a>
                </nav>
                <h3 className='font-bold'>My Orders</h3>
                <nav className='flex flex-col gap-1 text-[#00000050] ms-5 mt-3 mb-5'>
                    <a href="#" className='hover:text-[#DB4444] hover:font-bold duration-300'>My Returns</a>
                    <a href="#" className='hover:text-[#DB4444] hover:font-bold duration-300'>My cancellations</a>
                </nav>
                <h3 className='font-bold'>My WishList</h3>
            </div>
            <div className='sm:w-[74.3%] py-10 px-8 lg:px-20 rounded shadow-[0_0_10px_0px_rgba(0,0,0,0.1)]'>
                <form>
                    <h2 className='text-xl font-bold text-[#DB4444] mb-4'>Edit Your Profile</h2>
                    <div className='flex flex-col sm:flex-row sm:gap-5'>
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" required  
                                className=" h-[50px] w-full rounded bg-[#F5F5F5] mb-5 px-4 placeholder:text-[#00000050]" />
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" required  
                                className=" h-[50px] w-full rounded bg-[#F5F5F5] mb-5 px-4 placeholder:text-[#00000050]" />
                        </div>
                    </div>
                    <div className='w-full'>
                            <label htmlFor="userEmail">Email</label>
                            <input type="email" id="userEmail" required  
                                className=" h-[50px] w-full rounded bg-[#F5F5F5] mb-5 px-4 placeholder:text-[#00000050]" />
                    </div>
                    <div className='w-full'>
                            <label htmlFor="userPhone">Phone</label>
                            <input type="tel" id="userPhone" required  
                                className=" h-[50px] w-full rounded bg-[#F5F5F5] mb-5 px-4 placeholder:text-[#00000050]" />
                    </div>
                    <div>
                        <h4 className='font-semibold mb-3'>Password Changes</h4>
                            <input type="password" id="currentPassword" placeholder='Current Password'  
                                className=" h-[50px] w-full rounded bg-[#F5F5F5] mb-5 px-4 placeholder:text-[#00000050]" />
                            <input type="password" id="newPassword" placeholder='New Password'  
                                className=" h-[50px] w-full rounded bg-[#F5F5F5] mb-5 px-4 placeholder:text-[#00000050]" />
                            <input type="password" id="reNewPassword" placeholder='Confirm New Password'  
                                className=" h-[50px] w-full rounded bg-[#F5F5F5] mb-5 px-4 placeholder:text-[#00000050]" />
                    </div>
                </form>
            </div>
        </div>
    </>
}

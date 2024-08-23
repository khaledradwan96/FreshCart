/* eslint-disable no-unused-vars */
import React from 'react'
import { Bars } from 'react-loader-spinner'


;<Bars
    height="80"
    width="80"
    color="#4fa94d"
    ariaLabel="bars-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
/>



export default function LoadingInfinity() {
    return <>
        <div className='w-full flex justify-center items-center'>
            <Bars
                visible={true}
                width="200"
                color="#4fa94d"
                ariaLabel="infinity-spin-loading"
                />
        </div>
    </>
}

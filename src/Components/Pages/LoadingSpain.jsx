/* eslint-disable no-unused-vars */
import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'
;<InfinitySpin
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="three-dots-loading"
  wrapperStyle
  wrapperClass
/>



export default function LoadingSpain() {
    return <>
        <div className='w-full flex justify-center items-center'>
            <InfinitySpin
                visible={true}
                width="200"
                color="#4fa94d"
                ariaLabel="infinity-spin-loading"
                />
        </div>
    </>
}

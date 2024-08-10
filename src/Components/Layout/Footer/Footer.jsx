// Footer.jsx
/* eslint-disable no-unused-vars */

import React , { useState , useEffect} from 'react'

export default function Footer() {
    const [Count, setCount] = useState(0)
    useEffect(()=>{

    }, [])
    return <>
    <div className='bg-gray-300'>
        <div className="container mx-auto p-4">
            <h2>Footer</h2>
        </div>
    </div>
    </>
}

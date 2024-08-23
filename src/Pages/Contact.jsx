// Contact.jsx
/* eslint-disable no-unused-vars */

import React , { useState , useEffect} from 'react'
import AddressTitle from '../Components/AddressTitle'

export default function Contact() {
    const [Count, setCount] = useState(0)
    useEffect(()=>{

    }, [])
    return <>
        <AddressTitle/>
        <h2>Contact Compound</h2>
    </>
}

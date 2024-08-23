// About.jsx
/* eslint-disable no-unused-vars */

import React , { useState , useEffect} from 'react'
import AddressTitle from '../Components/AddressTitle'

export default function About() {
    const [Count, setCount] = useState(0)
    useEffect(()=>{

    }, [])
    return <>
    <AddressTitle/>
        <h2>About Compound</h2>
    </>
}

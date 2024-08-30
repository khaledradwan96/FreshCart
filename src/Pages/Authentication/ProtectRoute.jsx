// ProtectRoute.jsx
/* eslint-disable react/prop-types */

import { Navigate } from 'react-router-dom'

export default function ProtectRoute(props) {
    if(localStorage.getItem('userToken') !== null){ // user has token
        return props?.children
    }else{ // user hasn't token
        return <Navigate to='./login'/>
    }
}

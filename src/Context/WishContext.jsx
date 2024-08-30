// WishContext.jsx
/* eslint-disable react/prop-types */

import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let WishContext = createContext(0)

export function WishContextProvider(props){
    let [wishItems, setWishItems] = useState(null)

    let headers = {
            token: localStorage.getItem('userToken')
    }

    function getLoggedWishlist(){
        const api = 'https://ecommerce.routemisr.com/api/v1/wishlist';
        return axios.get(api, {
            headers: headers
        })
        .then((response)=> response)
        .catch((error)=> error)
    }

    function addToWish(productId){
        const api = 'https://ecommerce.routemisr.com/api/v1/wishlist'
        return axios.post(api, {
            'productId' : productId
        },
        {
            headers : headers
        })
        .then((response)=> response)
        .catch((error)=> error)
    }

    function deleteWish(productId){
        const api = `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`;
        return axios.delete(api, {
            headers: headers
        })
        .then((response)=> response)
        .catch((error)=> error)
    }

    async function getWish() {
        let response = await getLoggedWishlist()
        setWishItems[response.data.data]
    }

    useEffect(()=>{
        getWish()
    })


    return <WishContext.Provider value={{getLoggedWishlist, addToWish, deleteWish, wishItems, setWishItems}}>
                {props.children}
            </WishContext.Provider>
}
// WishContext.jsx
/* eslint-disable react/prop-types */

import axios from "axios";
import { createContext } from "react";

export let WishContext = createContext(0)

export function WishContextProvider(props){
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


    return <WishContext.Provider value={{getLoggedWishlist, addToWish, deleteWish}}>
                {props.children}
            </WishContext.Provider>
}
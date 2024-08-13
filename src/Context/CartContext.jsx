// CartContext.jsx
/* eslint-disable react/prop-types */

import axios from "axios";
import { createContext } from "react";

export let CartContext = createContext(0)

export function CartContextProvider(props){
    let headers = {
            token: localStorage.getItem('userToken')
    }

    function getLoggedCart(){
        const api = 'https://ecommerce.routemisr.com/api/v1/cart';
        return axios.get(api, {
            headers: headers
        })
        .then((response)=> response)
        .catch((error)=> error)
    }

    function addProduct(productId){
        const api = 'https://ecommerce.routemisr.com/api/v1/cart'
        return axios.post(api, {
            'productId' : productId
        },
        {
            headers : headers
        })
        .then((response)=> response)
        .catch((error)=> error)
    }

    function updateProduct(productId, count){
        const api = `https://ecommerce.routemisr.com/api/v1/cart/${productId}`;
        return axios.put(api, {
            'count': count
        },
        {
            headers: headers
        })
        .then((response)=> response)
        .catch((error)=> error)
    }

    function deleteProduct(productId){
        const api = `https://ecommerce.routemisr.com/api/v1/cart/${productId}`;
        return axios.delete(api, {
            headers: headers
        })
        .then((response)=> response)
        .catch((error)=> error)
    }

    function checkoutCart(cartId, url, checkoutValues){
        const api = `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`;
        return axios.post(api, {
            'shippingAddress': checkoutValues
        },
        {
            headers: headers
        })
        .then((response)=> response)
        .catch((error)=> error)
    }

    return <CartContext.Provider value={{getLoggedCart, addProduct, updateProduct, deleteProduct, checkoutCart}}>
                {props.children}
            </CartContext.Provider>
}
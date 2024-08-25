// CartContext.jsx
/* eslint-disable react/prop-types */

import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let CartContext = createContext(0)

export function CartContextProvider(props){
    let [cart, setCart] = useState(0)

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

    async function getCart(){
        let response = await getLoggedCart()
        setCart(response.data)
    }

    useEffect(()=> {
        getCart()
    },[])

    return <CartContext.Provider value={{getLoggedCart, cart, setCart, addProduct, updateProduct, deleteProduct, checkoutCart}}>
                {props.children}
            </CartContext.Provider>
}
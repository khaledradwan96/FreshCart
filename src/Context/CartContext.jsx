// CartContext.jsx
/* eslint-disable react/prop-types */

import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let CartContext = createContext(0)

export function CartContextProvider(props){
    let [cartCount, setCartCount] = useState(0)
    let [cartId, setCartId] = useState(null)

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

    function clearCart(){
        const api = `https://ecommerce.routemisr.com/api/v1/cart`;
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

    function userOrders(cartId){
        const api = `https://ecommerce.routemisr.com/api/v1/orders/user/${cartId}`
        return axios.get(api)
        .then((response)=> response)
        .catch((error)=> error)
    }

    async function getCart(){ // to show number of cart items and its ID
        let response = await getLoggedCart()
        setCartId(response.data.cartId)
        setCartCount(response.data)
    }

    useEffect(()=> {
        getCart()
    },[])

    return <CartContext.Provider value={{getLoggedCart, cartCount, cartId, setCartCount, 
                                            addProduct, updateProduct, deleteProduct, clearCart, 
                                            checkoutCart, userOrders}}>
                {props.children}
            </CartContext.Provider>
}
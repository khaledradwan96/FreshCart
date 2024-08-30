// AllOrders.jsx

import { useContext, useEffect } from "react";
import AddressTitle from "../Components/AddressTitle";
import { CartContext } from '../Context/CartContext';


export default function AllOrders() {
    let {userOrders, cartId} = useContext(CartContext)


    async function getUserOrders(){
        let response = await userOrders(cartId)
        console.log(response)
    }

    useEffect(()=> {
        getUserOrders()
    },[])

    return <>
        <AddressTitle/>
        <h2>All Orders Compound</h2>
    </>
}

// =====> need to handel in future
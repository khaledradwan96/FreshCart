// CounterContext.jsx
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";

export let CounterContext = createContext(0)

export default function CounterContextProvider(props){
    const [count, setcount] = useState(0)
    const [userName, setuserName] = useState('ahmed')

    return <>
        <CounterContext.Provider value={{count, userName, setcount, setuserName}}>
            {props.children}
        </CounterContext.Provider>
    </>
}

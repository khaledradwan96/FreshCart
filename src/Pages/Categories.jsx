// Categories.jsx
/* eslint-disable no-unused-vars */

import React , { useState , useEffect} from 'react'
import axios from 'axios';
import AddressTitle from '../Components/AddressTitle'
import LoadingInfinity from '../Components/LoadingInfinity'

export default function Categories() {
    const [loading, setLoading] = useState(false)
    const [categories, setCategories] = useState([])
    const [subcategories, setSubCategories] = useState([])
    const [categoryName, setCategoryName] = useState([])

    async function getCategories() {
        setLoading(true)
        const api = `https://ecommerce.routemisr.com/api/v1/categories`
        let {data} = await axios.get(api)
        setCategories(data.data)
        setLoading(false)
    }

    async function getSubCategories(categoryId, categoryName) {
        const api = `https://ecommerce.routemisr.com/api/v1/categories/${categoryId}/subcategories`
        let {data} = await axios.get(api)
        setSubCategories(data.data)
        setCategoryName(categoryName)
    }
    useEffect(()=>{
        getCategories()
    }, [])
    return <>
        <AddressTitle/>
        {loading ? <LoadingInfinity/>
        : <>
            <div className='flex flex-wrap flex-col md:flex-row'>
                {categories.map((category)=>
                    <div key={category._id} className='w-full md:w-1/2 lg:w-1/3 p-3'>
                        <div className='border rounded-md product cursor-pointer' onClick={()=>getSubCategories(category._id, category.name)}>
                            <img src={category.image} className='w-full h-[300px]' />
                            <h4 className='font-bold mt-1 text-main text-center text-2xl p-3'>{category.name}</h4>
                        </div>
                    </div>
                )}
            </div>
        </>
        }

        <h3 className='font-bold mt-10 text-main text-center text-2xl p-3'>{categoryName} subcategories</h3>
        <div className='flex flex-wrap flex-col md:flex-row justify-center items-center'>
            {subcategories?.map((subcategory)=>
                <div key={subcategory._id} className='w-full md:w-1/2 lg:w-1/3 p-3'>
                    <div className='border rounded-md'>
                        <h4 className='font-bold mt-1 text-center text-2xl p-3'>{subcategory.name}</h4>
                    </div>
                </div>
            )}
        </div>
    </>
}

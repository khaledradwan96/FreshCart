// App.jsx

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Product from './Components/Product/Product'
import Cart from './Components/Cart/Cart'
import Brands from './Components/Brands/Brands'
import Categories from './Components/Categories/Categories'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import Notfound from './Components/Notfound/Notfound'

let router = createBrowserRouter([
  {path: '', element: <Layout/>, children:[
    {index: true, element: <Home/>},
    {path: 'product', element: <Product/>},
    {path: 'cart', element: <Cart/>},
    {path: 'brands', element: <Brands/>},
    {path: 'categories', element: <Categories/>},
    {path: 'register', element: <Register/>},
    {path: 'login', element: <Login/>},
    {path: '*', element: <Notfound/>},
  ]}
])
function App() {
  return <>
      <RouterProvider router={router}></RouterProvider>
    </>

}

export default App

// App.jsx

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Components/Layout/Home/Home'
import Cart from './Components/Layout/Cart/Cart'
import Brands from './Components/Layout/Brands/Brands'
import Categories from './Components/Layout/Categories/Categories'
import Register from './Components/Authentication/Register/Register'
import Login from './Components/Authentication/Login/Login'
import Notfound from './Components/Notfound/Notfound'
import UserContextProvider from './Context/UserContext'
import ProtectRoute from './Components/Authentication/ProtectRoute/ProtectRoute'
import ProductDetails from './Components/Layout/ProductDetails/ProductDetails'
import Products from './Components/Layout/Products/Products'

Home
let router = createBrowserRouter([
  {path: '', element: <Layout/>, children:[
    {index: true, element: <ProtectRoute> <Home/> </ProtectRoute> },
    {path: 'products', element: <ProtectRoute> <Products/> </ProtectRoute> },

    {path: 'productDetails/:id/:category', element: <ProtectRoute> <ProductDetails/> </ProtectRoute>},
    
    {path: 'cart', element: <ProtectRoute> <Cart/> </ProtectRoute>},
    {path: 'brands', element: <ProtectRoute> <Brands/> </ProtectRoute>},
    {path: 'categories', element: <ProtectRoute> <Categories/> </ProtectRoute>},
    {path: 'register', element: <Register/>},
    {path: 'login', element: <Login/>},
    {path: '*', element: <Notfound/>},
  ]}
])
function App() {
  return <>
    <UserContextProvider>
            <RouterProvider router={router}></RouterProvider>
    </UserContextProvider>
    </>
}

export default App

// we write index: true => to mention home
// we use createBrowserRouter => to can move from all compound
// we use UserContextProvider => to can access data from any compound
// we use ProtectRoute  => to protect our site
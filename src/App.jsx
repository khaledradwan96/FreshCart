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
import UserContextProvider from './Context/UserContext'
import ProtectRoute from './Components/ProtectRoute/ProtectRoute'


let router = createBrowserRouter([
  {path: '', element: <Layout/>, children:[
    {index: true, element: <ProtectRoute> <Home/> </ProtectRoute> },
    {path: 'product', element: <ProtectRoute> <Product/> </ProtectRoute>},
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

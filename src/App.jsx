// App.jsx

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Components/Pages/Home/Home'
import Cart from './Components/Pages/Cart'
import Brands from './Components/Pages/Brands'
import Categories from './Components/Pages/Categories'
import ProductDetails from './Components/Pages/ProductDetails'
import Products from './Components/Pages/Products'
import Register from './Components/Authentication/Register'
import Login from './Components/Authentication/Login'
import ProtectRoute from './Components/Authentication/ProtectRoute'
import Notfound from './Components/Notfound/Notfound'
import UserContextProvider from './Context/UserContext'
import { CartContextProvider } from './Context/CartContext'

import { Toaster } from 'react-hot-toast';
import Checkout from './Components/Pages/Checkout'
import AllOrders from './Components/Pages/AllOrders'
import Contact from './Components/Pages/Contact'
import About from './Components/Pages/About'
import Wishlist from './Components/Pages/Wishlist'
import ForgetPassword from './Components/Authentication/ForgetPassword'
import ResetPassword from './Components/Authentication/ResetPassword'


let router = createBrowserRouter([
  {path: '', element: <Layout/>, children:[
    {index: true, element: <ProtectRoute> <Home/> </ProtectRoute> },
    {path: 'products', element: <ProtectRoute> <Products/> </ProtectRoute> },

    {path: 'productDetails/:id/:category', element: <ProtectRoute> <ProductDetails/> </ProtectRoute>},
    
    {path: 'contact', element: <ProtectRoute> <Contact/> </ProtectRoute>},
    {path: 'about', element: <ProtectRoute> <About/> </ProtectRoute>},
    {path: 'cart', element: <ProtectRoute> <Cart/> </ProtectRoute>},
    {path: 'wishlist', element: <ProtectRoute> <Wishlist/> </ProtectRoute>},
    {path: 'brands', element: <ProtectRoute> <Brands/> </ProtectRoute>},
    {path: 'categories', element: <ProtectRoute> <Categories/> </ProtectRoute>},
    {path: 'checkout', element: <ProtectRoute> <Checkout/> </ProtectRoute>},
    {path: 'allorders', element: <ProtectRoute> <AllOrders/> </ProtectRoute>},
    {path: 'register', element: <Register/>},
    {path: 'login', element: <Login/>},
    {path: 'ForgetPassword', element: <ForgetPassword/>},
    {path: 'ResetPassword', element: <ResetPassword/>},
    {path: '*', element: <Notfound/>},
  ]}
])
function App() {
  return <>
      <UserContextProvider>
          <CartContextProvider>
                    <RouterProvider router={router}></RouterProvider>
                    <Toaster />
          </CartContextProvider>
      </UserContextProvider>
    </>
}

export default App

// we write index: true => to mention home
// we use createBrowserRouter => to can move from all compound
// we use UserContextProvider => to can access data from any compound
// we use ProtectRoute  => to protect our site
// App.jsx

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart'
import Brands from './Pages/Brands'
import Categories from './Pages/Categories'
import ProductDetails from './Pages/ProductDetails'
import Products from './Pages/Products'
import Register from './Pages/Authentication/Register'
import Login from './Pages/Authentication/Login'
import ProtectRoute from './Pages/Authentication/ProtectRoute'
import Notfound from './Pages/Notfound'
import UserContextProvider from './Context/UserContext'
import { CartContextProvider } from './Context/CartContext'

import { Toaster } from 'react-hot-toast';
import Checkout from './Pages/Checkout'
import AllOrders from './Pages/AllOrders'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Wishlist from './Pages/Wishlist'
import ForgetPassword from './Pages/Authentication/ForgetPassword'
import ResetPassword from './Pages/Authentication/ResetPassword'
import Account from './Pages/Account'


let router = createBrowserRouter([
  {path: '', element: <Layout/>, children:[
    {index: true, element: <ProtectRoute> <Home/> </ProtectRoute> },
    {path: 'products', element: <ProtectRoute> <Products/> </ProtectRoute> },

    {path: 'productDetails/:id/:category', element: <ProtectRoute> <ProductDetails/> </ProtectRoute>},
    
    {path: 'contact', element: <ProtectRoute> <Contact/> </ProtectRoute>},
    {path: 'about', element: <ProtectRoute> <About/> </ProtectRoute>},
    {path: 'categories', element: <ProtectRoute> <Categories/> </ProtectRoute>},
    {path: 'brands', element: <ProtectRoute> <Brands/> </ProtectRoute>},
    {path: 'wishlist', element: <ProtectRoute> <Wishlist/> </ProtectRoute>},
    {path: 'cart', element: <ProtectRoute> <Cart/> </ProtectRoute>},
    {path: 'checkout', element: <ProtectRoute> <Checkout/> </ProtectRoute>},
    {path: 'allrders', element: <ProtectRoute> <AllOrders/> </ProtectRoute>},
    {path: 'account', element: <ProtectRoute> <Account/> </ProtectRoute>},
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
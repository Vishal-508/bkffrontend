import React from 'react'
import {Routes, Route} from "react-router-dom"
import AdminDashboard from './AdminPages/AdminDashboard'
import AdminLogin from './AdminPages/AdminLogin'
import MerchantDashboard from './MerchantPages/MerchantDashboard'
import MerchantLogin from './MerchantPages/MerchantLogin'
import MerchantSignUp from './MerchantPages/MerchantSignUp'
import PrivateRoute from './PrivateRoute'
import AddressPage from './UserPages/AddressPage'
import Cart from './UserPages/Cart'
import Home from './UserPages/Home'
import OrderPage from './UserPages/OrderPage'
import PaymentPage from './UserPages/PaymentPage'
import ProductsPage from './UserPages/ProductsPage'
import SingleProductPage from './UserPages/SingleProductPage'
import Thankyou from './UserPages/Thankyou'
import UserLogin from './UserPages/UserLogin'
import UserSignUp from './UserPages/UserSignUp'
import WishList from './UserPages/WishList'
const AllRoutes = () => {
  return (
   <Routes>
    {/* USER'S ROUTES */}
    <Route path='/' element={<Home/>} />
    <Route path='/UserSignUp' element={<UserSignUp/>} />
    <Route path='/UserLogin' element={<UserLogin/>} />
    <Route path='/ProductsPage' element={<ProductsPage/>} />
    <Route path='/OrderPlaced' element={<Thankyou/>} />
    <Route path='/SingleProductPage/:id' element={<SingleProductPage/>} />


    {/* private routes below */}
    <Route path='/CartPage' element={<PrivateRoute><Cart/></PrivateRoute>} />
    <Route path='/WishListPage' element={<PrivateRoute><WishList/></PrivateRoute>} />
    <Route path='/PaymentPage' element={<PrivateRoute><PaymentPage/></PrivateRoute>} />
    <Route path='/AddressPage' element={<PrivateRoute><AddressPage/></PrivateRoute>} />
    <Route path='/OrderPage' element={<PrivateRoute><OrderPage/></PrivateRoute>} />

    {/* ADMIN'S ROUTES */}
    <Route path='/AdminLogin' element={<AdminLogin/>} />
    {/* private routes below */}
    <Route path='/AdminDashboard' element={<PrivateRoute><AdminDashboard/></PrivateRoute>} />

    {/* MERCHANT'S ROUTES */}
    <Route path='/MerchantSignUp' element={<MerchantSignUp/>} />
    <Route path='/MerchantLogin' element={<MerchantLogin/>} />
    {/* private routes below */}
    <Route path='/MerchantDashboard' element={<PrivateRoute><MerchantDashboard/></PrivateRoute>} />
   </Routes>
  )
}

export default AllRoutes

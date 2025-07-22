import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import ProductSection from '../pages/ProductSection'
import ProductInfo from '../pages/ProductInfo'
import Login from '../pages/Login'
import CartPage from '../pages/CartPage'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/products' element={<ProductSection />} />
      <Route path='/product-info' element={<ProductInfo />} />
      <Route path='/login' element={<Login />} />
      <Route path='/cart' element={<CartPage/>} />
    </Routes>
  )
}

export default MainRoutes
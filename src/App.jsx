// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"


import './App.css'
import Product from './Product'
import ProductDetails from './ProductDetails'
import NotFound from './NotFound'
import Hero from "./Hero"
import Nav from "./Nav"
import Cards from "./Cards"
import About from "./About"
import Blog from "./Blog"
import Footer from "./Footer"
import Home from "./Home"
import Form from "./Form"
import Blogs from "./Blogs"
import CartPage from "./CartPage"


function App() {


  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route  path="/home" element={<Home/>} />
        <Route path="/products" element={<Product />} />
        <Route path="/cards" element={<Cards/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/" element={<Form/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/prodectsDetails/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/cart" element={<CartPage/>} />
        /</Routes>
        <Footer/>


    </BrowserRouter>
  )
}

export default App

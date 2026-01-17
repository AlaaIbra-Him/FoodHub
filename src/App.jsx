import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <div className='bg-gradient-to-br from-green-900 via-gray-900 to-gray-950 min-h-screen'>
        <ToastContainer 
          position="bottom-right" 
          autoClose={1000} 
          theme="dark"
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/products" element={<Product />} />
          <Route path="/cards" element={<Cards/>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/" element={<Form/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/prodectsDetails/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cart" element={<CartPage/>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
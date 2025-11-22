import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { CartProvider } from "./Context/CartContext"
import Navbar from './components/Navebar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shope'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import About from './pages/About'
import NotFound from './pages/NotFound'
import ToastNotification from './components/ToastNotifications'

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <ToastNotification />
      </div>
    </CartProvider>
  )
}

export default App

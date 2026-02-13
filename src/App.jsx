import { useState } from 'react'
import './App.css'
import Home from './assets/pages/home/home'
import Shop from './assets/pages/shop/shop'
import { Route,Routes } from 'react-router-dom'
import Sale from './assets/pages/sale/sale'
import Features from './assets/pages/featured/features'
import Contact from './assets/pages/contact'
import About from './assets/pages/about/about'
import Blog from './assets/pages/blog/blog'
import Details from './assets/pages/blog/details'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  )
}

export default App

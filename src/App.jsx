import { useState } from 'react'
import './App.css'
import Home from './assets/pages/home/home'
import Shop from './assets/pages/shop/shop'
import { Route,Routes } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  )
}

export default App

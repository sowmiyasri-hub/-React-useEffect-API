import React from 'react'
import Product from './pages/Product'
import Navbar from './pages/Navbar'
import { Routes, Route } from 'react-router-dom'
import Details from './components/Details'
function App() {
  return (
    <>
 <Navbar/>

 <Routes>
        <Route path='/' element={<Product />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
    </>
  )
}

export default App



import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Service from './Service'
import Contect from './Contect'
import About from './About'
import Navbar from './Navbar'
import Footer from './footer'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/sixtry/' Component={Home} />

        <Route path='/service' Component={Service} />
        <Route path='/contect' Component={Contect} />
        <Route path='/About' Component={About} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
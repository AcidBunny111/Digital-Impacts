import react from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import Services from './components/servicess/services'
import Aboutus from './components/about us/aboutus'
import Portfolio from './components/portfolio/portfolio'
import Footer from './components/footer/footer'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/services' element={<Services />} />
      <Route path='/about' element={<Aboutus />} />
      <Route path='/portfolio' element={<Portfolio />} />
    </Routes>
    <Footer/>
    
    </>
  )
}

export default App

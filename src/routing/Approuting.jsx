import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home } from '../pages/Home'
import { AboutMe } from '../comp/aboutme'
import { Navbar } from '../comp/navbar'
const Approuting = () => {
  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<AboutMe />} />
    </Routes>

  )
}

export default Approuting

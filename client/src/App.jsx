import React from 'react'
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import BgWaves from './components/bgWaves/BgWaves'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Projects from './pages/projects/Projects'
import Contact from './pages/contact/Contact'
import NotFound from './pages/notFound/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <BgWaves />
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='projects' element={<Projects/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path="/404" element={<NotFound/>}/>
          	<Route path="*" element={<Navigate to="/404"/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
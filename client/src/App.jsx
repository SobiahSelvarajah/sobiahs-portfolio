import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Projects from './pages/projects/Projects'
import Contact from './pages/contact/Contact'
import NotFound from './pages/notFound/NotFound'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='projects' element={<Projects/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='*' element={<NotFound/>}/>    
        </Routes>
    </BrowserRouter>
  )
}

export default App
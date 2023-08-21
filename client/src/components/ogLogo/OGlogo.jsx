import React from 'react'
import logo from '../../assets/portfolio-logo/original-on-transparent.png'
import './OGlogo.scss'

const OGlogo = () => {
  return (
    <img 
        src={logo} 
        alt="logo" 
        className="ogLogo__image" 
    />
  )
}

export default OGlogo
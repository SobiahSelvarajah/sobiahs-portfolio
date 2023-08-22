import React from 'react'
import me from '../../assets/images/self.jpg'
import './AboutPic.scss'

const AboutPic = () => {
  return (
    <img src={me} alt="self pic" className="aboutPic__image" />
  )
}

export default AboutPic
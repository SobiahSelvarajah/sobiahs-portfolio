import React from 'react'
import AboutPic from '../../components/aboutPic/AboutPic'
import AboutButtons from '../../components/aboutButtons/AboutButtons'
import './AboutAside.scss'

const AboutAside = () => {
  return (
    <aside className="aboutAside__content">
        <AboutPic/>
        <AboutButtons/>
    </aside>
  )
}

export default AboutAside
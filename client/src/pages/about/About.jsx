import React from 'react'
import AboutHeading from '../../components/aboutHeading/AboutHeading'
import AboutPic from '../../components/aboutPic/AboutPic'
import './About.scss'

const About = () => {
  return (
    <section className="about__container">
      <AboutHeading/>
      <div className="about__content">
        <AboutPic/>
      </div>
    </section>
  )
}

export default About
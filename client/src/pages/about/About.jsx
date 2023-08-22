import React from 'react'
import AboutHeading from '../../components/aboutHeading/AboutHeading'
import AboutContent from '../../components/aboutContent/AboutContent'
import './About.scss'

const About = () => {
  return (
    <section className="about__container">
      <AboutHeading/>
      <AboutContent/>
    </section>
  )
}

export default About
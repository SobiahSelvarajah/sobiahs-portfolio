import React from 'react'
import AboutHeading from '../../components/aboutHeading/AboutHeading'
import AboutAside from '../../components/aboutAside/AboutAside'
import AboutText from '../../components/aboutText/AboutText'
import './About.scss'

const About = () => {
  return (
    <section className="about__container">
      <AboutHeading/>
      <div className="about__content">
        <AboutAside/>
        <AboutText/>
      </div>
    </section>
  )
}

export default About
import React from 'react'
import ContactButton from '../../components/contactButton/ContactButton'
import ResumeButton from '../../components/resumeButton/ResumeButton'
import './AboutButtons.scss'

const AboutButtons = () => {
  return (
    <div className="aboutButtons__container">
        <ContactButton/>
        <ResumeButton/>
    </div>
  )
}

export default AboutButtons
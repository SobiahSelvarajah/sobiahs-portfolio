import React from 'react'
import IconGithub from '../iconGithub/IconGithub'
import IconLinkedIn from '../iconLinkedIn/IconLinkedIn'
import IconInstagram from '../iconInstagram/IconInstagram'
import './IconSocials.scss'

const IconSocials = () => {
  return (
    <div className="iconSocials__container">
        <IconGithub/>
        <IconLinkedIn/>
        <IconInstagram/>
    </div>
  )
}

export default IconSocials
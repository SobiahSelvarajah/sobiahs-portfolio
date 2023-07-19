import React from 'react'
import IconSocials from '../iconSocials/IconSocials'
import './HomeTextLeft.scss'

const HomeTextLeft = () => {
  return (
    <section className="homeTextLeft__container">
        <h1 className="homeTextLeft__name">
            Sobiah Selvarajah
        </h1>
        <h5 className="homeTextLeft__description">
            Full Stack Developer
        </h5>
        <IconSocials/>
    </section>
  )
}

export default HomeTextLeft
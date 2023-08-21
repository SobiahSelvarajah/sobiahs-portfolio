import React from 'react'
import { FaRobot } from 'react-icons/fa'
import HomeButton from '../../components/homeButton/HomeButton'
import './NotFound.scss'

const NotFound = () => {
  return (
    <section className="notFound__container">
      <FaRobot/>
      <h2 className="notFound__heading">
        Oops...something went wrong!
      </h2>
      <h4 className="notFound__text">
        Don't worry, you didn't break anything. Just head on back to the homepage.
      </h4>
      <HomeButton/>
    </section>
  )
}

export default NotFound
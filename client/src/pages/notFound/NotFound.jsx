import React from 'react'
import { Link } from 'react-router-dom'
import { FaRobot } from 'react-icons/fa'
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
      <Link to='/' className='notFound__link'>
        <button className="notFound__homepage">
          Go to Homepage
        </button>        
      </Link>
    </section>
  )
}

export default NotFound
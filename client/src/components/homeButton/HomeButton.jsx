import React from 'react'
import { Link } from 'react-router-dom'

const HomeButton = () => {
  return (
    <Link to='/' className='homeButton__link'>
        <button className="homeButton__button">
            Go to Homepage
        </button>        
    </Link>
  )
}

export default HomeButton
import React from 'react'
import { Link } from 'react-router-dom'

const ContactButton = () => {
  return (
    <Link to='/contact' className='contactButton__link'>
        <button className="contactButton__button">
            Contact Me
        </button>        
    </Link>
  )
}

export default ContactButton
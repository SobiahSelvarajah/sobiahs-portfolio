import React from 'react'
import HomeTextLeft from '../../components/homeTextLeft/HomeTextLeft'
import HomeTextRight from '../../components/homeTextRight/HomeTextRight'
import './Home.scss'

const Home = () => {
  return (
    <div className="home__container">
      <HomeTextLeft/>
      <HomeTextRight/>
    </div>
  )
}

export default Home
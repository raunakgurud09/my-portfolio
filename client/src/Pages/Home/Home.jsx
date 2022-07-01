import React from 'react'
import {About, Hero,Navigation} from '../../Components/exports'
import './Home.css'
function Home() {
  return (
    <div className="home">
        <Navigation />
        <Hero />
        <About />
    </div>
  )
}

export default Home
import React from 'react'
import HerosSction from '../../Component/LandingComponent/HerosSction'
import Header from '../../Component/LandingComponent/Header'
import OurTeam from '../../Component/LandingComponent/OurTeam'
import OurSkills from '../../Component/LandingComponent/OurSkills'
import Footer from '../../Component/LandingComponent/Footer'

const Landing = () => {
  return (
    <div>
        <Header/>
        <HerosSction/>
        <OurTeam/>
        <OurSkills/>
        <Footer/>
    </div>
  )
}

export default Landing
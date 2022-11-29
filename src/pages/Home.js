import React from 'react'
import NavBar from '../components/NavBar'
import Waves from '../components/Waves'
import "./Home.css"
import Footer from '../components/Footer'
import WorldImage from '../assets/world2.png'

const Home = () => {
  return (
    <>
    
    <NavBar />
    
    <div className="homeBody">
        <h1 className="header"> Raising the Standard of Sustainable Solutions With</h1>
        <h1 className="header2"> <span className="changingText">Fair Labor Practices</span> </h1>
        <img src={WorldImage} />
        <p>A group of university researchers committed to addressing sustainability and
            climate change from the root in order to inform holistic solutions</p>
    </div>
    <Waves />
    <Footer/>
    
    </>
  )
}

export default Home
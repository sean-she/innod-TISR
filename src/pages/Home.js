import React from 'react'
import NavBar from '../components/NavBar'
import Waves from '../components/Waves'
import "./Home.css"
import World from '../components/World'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    
    <NavBar />
    
    <div className="homeBody">
        <h1 className="header"> Raising the Standard of Sustainable Solutions With</h1>
        <h1 className="header2"> <span className="changingText">Fair Labor Practices</span> </h1>
        <img src={require("../assets/world.png")} />
        <p>A group of university researchers committed to addressing sustainability and
            climate change from the root in order to inform holistic solutions</p>
    </div>
    <Waves />
    <Footer/>
    
    </>
  )
}

export default Home
import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import Waves from '../components/Waves'
import "./Home.css"
import Footer from '../components/Footer'
import WorldImage from '../assets/world2.png'
import Typewriter from 'typewriter-effect/dist/core';

const Home = () => {

  const typewriterStrings = ["Intersectionality",
    "Deep Investigation",
    "Environmental Justice",
    "Challenging Overproduction & Overconsumption",
    "Conscious Consumer Culture",
    "Increasing Transparency",
    "Social Impact",
    "Feasibility",
    "Systems Thinkings"
  ]

  useEffect(()=> {
    new Typewriter('#changingText', {
      strings: typewriterStrings,
      autoStart: true,
      loop:true,
      
      deleteSpeed:7,
    });
  }, [])

  return (
    <>
    
    <NavBar />
    
    <div className="homeBody">
        <div className="header headers"> Raising the Standard of Sustainable Solutions With</div>
        <div className="header2 headers"> <span id="changingText">Fair Labor Practices</span> </div>
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
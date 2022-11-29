import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import Waves from '../components/Waves'
import "./Home.css"
import Footer from '../components/Footer'
import WorldImage from '../assets/world2.png'
import Typewriter from 'typewriter-effect/dist/core';

const Home = () => {
  useEffect(()=> {
    var app = document.getElementById('changingText');
    var customNodeCreator = function(character) {
      return document.createTextNode(character);
    }
  
    var typewriter = new Typewriter(app, {
      loop: true,
      delay: 75,
      onCreateTextNode: customNodeCreator,
    });
  
    typewriter
      .typeString('Social impact')
      .pauseFor(300)
      .start();
  }, [])

  return (
    <>
    
    <NavBar />
    
    <div className="homeBody">
        <h1 className="header"> Raising the Standard of Sustainable Solutions With</h1>
        <h1 className="header2"> <span id="changingText">Fair Labor Practices</span> </h1>
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
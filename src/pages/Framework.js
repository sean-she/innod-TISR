import React from 'react'
import NavBar from '../components/NavBar'
import Waves from '../components/Waves'
import Footer from '../components/Footer'
import "./Framework.css"
import FrameworkImg from "../assets/frameworkimg.svg"

const Framework = () => {
  return (
    <>
    <NavBar />
    <img className="framework-img" src={FrameworkImg} />
    <div className="framework-container">
        <h1 className="framework-header">Our Framework</h1>
        <div>
          <h2>The Entity and Solution in Consideration</h2>
        </div>
        <div>
          <h3>Analyze What the Solution Defines as the Problem:</h3>
          <div className="framework-p">In other words, what are the assumptions that are made when proposing a solution? 
            For example, electric vehicles assumes gasoline cars are the problem and that climate 
            change is caused by gasoline car usage.</div>
        </div>
        <div>
          <div>
            <h4>Overproduction & Overconsumption</h4>
            <div className="framework-q"> Does this solution require constant production, extraction, financial investment, 
              and consumption? <span id="framework-q-grey">(If yes, needs rework)</span> Does this solution fuel overconsumption?  
              <span id="framework-q-grey"> (If yes, needs rework)</span></div>
          </div>
          <div>
            <h4>Consciousness</h4>
            <div className="framework-q">Does this solution prioritize convenience over wellness? <span id="framework-q-grey">(If yes, needs rework)</span> 
              Does this solution bring awareness to its own negative impacts? <span id="framework-q-grey">(If no, needs rework)</span></div>
          </div>
          <div>
            <h4>Environmental Metrics</h4>
            <div className="framework-q">Does this solution decrease the level of waste the entity causes through-out life-cycle? 
            <span id="framework-q-grey">(If no, needs rework)</span> Does this solution decrease the amount of pollution the entity 
              causes through-out life-cycle? <span id="framework-q-grey">(If no, needs rework)</span></div>
          </div>
          <div>
            <h4>Living Beings Impact</h4>
            <div className="framework-q">Does this solution rentail equitable, non-exploitative labor? <span id="framework-q-grey">(If no, needs rework)</span> 
              Does this solution commodify and exploit other living beings, from humans to 
              plants? <span id="framework-q-grey">(If yes, needs rework)</span></div>
          </div>
          <div>
            <h4>Effectiveness</h4>
            <div className="framework-q">Does this solution lessen the production or use of the problematic product? 
            <span id="framework-q-grey">(If no, needs rework)</span> Is this solution able to be implemented? <span id="framework-q-grey">(If no, needs rework)</span></div>
          </div>
        </div>
    </div>
    <Waves />
    <Footer />
    </>
  )
}

export default Framework;
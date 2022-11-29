import React from 'react'
import "./NavBar.css"
import Logo from "../logo.svg"


const NavBar = () => {
  return (
    <div className = 'container'>
     
      <div className='logo'>
      <img className="logoImage" src={Logo} alt = 'logo'></img>
      <div className = "titletext">
        <div className = 'title-item'>The Intersectional</div>
        <div className = 'title-item'>Sustainability Review</div>
      </div>
      </div>
      <div className = 'navbar'>
          <a className = "flex-item" href="/">Home</a>
          <a className = "flex-item" href="/research">Research </a>
          <a className="flex-item" href="/framework">Framework</a>
          <a className = "flex-item" href="/team">Team</a>
          <a className = "flex-item" href="/insights">Insights</a>
      </div>
    </div>

  ) 
}

export default NavBar;
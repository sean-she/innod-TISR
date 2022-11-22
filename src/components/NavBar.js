import React from 'react'
import "./NavBar.css"


const NavBar = () => {
  return (
    <div className = 'container'>
     
      <div className='logo'>
      <img id="logoImage" src="http://placehold.it/150x75" alt = 'logo'></img>
      <div className = "titletext">
        <div className = 'title-item'>The Intersectional</div>
        <div className = 'title-item'>Sustainability Review</div>
      </div>
      </div>
      <div className = 'navbar'>
          <a className = "flex-item" href="/">Home</a>
          <a className = "flex-item" href="/research">Research </a>
        <a className="flex-item" href="/framework">Framework</a>
          <div className = "flex-item">Team</div>
          <div className = "flex-item">Insights</div>


      </div>
    </div>

  ) 
}

export default NavBar;
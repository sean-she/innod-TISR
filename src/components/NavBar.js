import React from 'react'
import "./NavBar.css"


const NavBar = () => {
  return (
    <div className = 'container'>
      <div className='logo'>
        <div><img id="logoImage" src="http://placehold.it/150x75"></img>The Intersectional Sustainability Review</div>
      </div>
      <div className = 'navbar'>
          <a className = "flex-item" href="/">Home</a>
          <a className = "flex-item" href="/research">Research </a>
        <a className="flex-item" href="/framework">Framework</a>
          <a className = "flex-item">Team</a>
          <a className = "flex-item">Insights</a>


      </div>
    </div>

  ) 
}

export default NavBar;
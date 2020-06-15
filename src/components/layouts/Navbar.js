import React from 'react'
import { Link } from 'react-router-dom'
import SignedOutLinks from './SignedOutLinks'
import SignedInLinks from './SignedInLinks'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span style={{fontSize: 20}}>Age UK</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item float-right">
              <Link to='/' className="nav-link">Homepage</Link>
            </li>
            <SignedInLinks />
            <SignedOutLinks />  
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
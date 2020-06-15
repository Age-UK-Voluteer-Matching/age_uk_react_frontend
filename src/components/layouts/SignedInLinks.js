import React from 'react'
import { Link } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <>
    <li className="nav-item">
      <Link to='/account' className="nav-link">My Account</Link>
    </li>
    <li className="nav-item">
      <Link to='/matches' className="nav-link">My Matches</Link>
    </li>
    </>
  )
}

export default SignedInLinks
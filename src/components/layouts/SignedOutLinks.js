import React from 'react'
import { Link } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <>
      <li className="nav-item">
        <Link to='/login' className="nav-link">Sign In</Link>
      </li>
      <li className="nav-item">
        <Link to='/signup' className="nav-link">Sign Up</Link>
      </li>
    </>
  )
}

export default SignedOutLinks
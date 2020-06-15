import React from 'react'
import { Link } from 'react-router-dom'
import SignedOutLinks from './SignedOutLinks'
import SignedInLinks from './SignedInLinks'

const Navbar = () => {
  return (
    <div>
      <Link to='/'>Homepage</Link>
      <SignedOutLinks />
      <SignedInLinks />
    </div>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <>
      <Link to='/'>Sign In</Link>
      <Link to='/'>Sign Up</Link>
    </>
  )
}

export default SignedOutLinks
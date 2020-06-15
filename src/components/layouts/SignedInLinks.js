import React from 'react'
import { Link } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <>
      <Link to='/account'>My Account</Link>
      <Link to='/matches'>My Matches</Link>
    </>
  )
}

export default SignedInLinks
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class SignUp extends Component {
  render() {
    return (
      <div className="container text-center signup-page-options">
        <h3 className="signup-page-title">Thanks for signing up. Firstly, let us know if you are looking for a volunteer or if you are a volunteer</h3>
        <Link to='/signupuser' className="homepage-button">I am a volunteer</Link>
        <Link to='/signupvolunteer' className="homepage-button">I want to find a volunteer</Link>
      </div>
    )
  }
}


export default SignUp

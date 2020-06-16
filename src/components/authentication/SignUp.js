import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class SignUp extends Component {
  render() {
    return (
      <div>
        <h3>If you are looking for a volunteer, sign up <Link to="/signupuser">here</Link></h3>
        <h3>If you are a volunteer, sign up <Link to="/signupvolunteer">here</Link></h3>
      </div>
    )
  }
  }

export default SignUp

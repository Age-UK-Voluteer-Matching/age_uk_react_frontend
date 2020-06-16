import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Landing extends Component {
  render() {
    return (
      <div className="text-center">
        <h1>Age UK Volunteer Matching</h1>
        <Link to='/signupuser'>Find a Volunteer</Link>
        <Link to='/signupvolunteer'>Become a Volunteer</Link>
      </div>
    )
  }
}

export default Landing

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
export class Landing extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="text-center">
        <h1>Age UK Volunteer Matching</h1>
        <Link to='/signupuser'>Find a Volunteer</Link>
        <Link to='/signupvolunteer'>Become a Volunteer</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.auth
  }
}

export default compose(
  connect(mapStateToProps)
)(Landing)


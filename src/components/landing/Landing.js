import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import logo from '../../age_uk_volunteer_png.png'
import '../../index.css'
export class Landing extends Component {
  render() {
    
    console.log(this.props)
    return (
      <div className="text-center">
        <img src={logo} style={{width: 400, marginTop: 100}}/> <br/>
        <Link to='/signupuser' className="homepage-button">Find a Volunteer</Link>
        <Link to='/signupvolunteer' className="homepage-button">Become a Volunteer</Link>
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


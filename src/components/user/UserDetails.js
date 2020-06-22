import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createUserDetails } from '../../store/actions/authActions'

class UserDetails extends Component {
  state = {
    id: this.props.match.params.id,
    firstName: '',
    lastName: '',
    bio: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    this.props.createUserDetails(this.state)
    this.props.history.push('/interests/' + this.state.id)
  }
  render() {
    return (
      <div className="container">
        <h1 className="authentication-titles">Thank you for signing up to find a volunteer.</h1>
        <h4 className='authentication-subtitles'>Now, tell us a bit about yourself so we can match you with the best person!</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group" >
            <label htmlFor="exampleInputEmail1">First Name</label>
            <input type="text" className="form-control" id="firstName" placeholder="Enter first name" onChange={this.handleChange}/>
          </div>
          <div className="form-group" >
            <label htmlFor="exampleInputEmail1">Last Name</label>
            <input type="text" className="form-control" id="lastName" placeholder="Enter last name" onChange={this.handleChange}/>
          </div>
          <div className="form-group" >
            <label htmlFor="exampleInputEmail1">Tell us a bit about yourself</label>
            <input type="textarea" className="form-control" id="bio" placeholder="A bit about yourself...." onChange={this.handleChange}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUserDetails: (userDetails) => { dispatch(createUserDetails(userDetails)) }
  }
}



export default connect(null, mapDispatchToProps)(UserDetails)
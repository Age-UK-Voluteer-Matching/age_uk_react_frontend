import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SignUpVolunteer extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  }
  render() {
    return (
      <div>
        <h1>Thank you for signing up as a volunteer</h1>
        <h4>If you are looking for a volunteer, click <Link to="/signupuser">Here</Link></h4>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group" >
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={this.handleChange}/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.handleChange}/>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default SignUpVolunteer
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux' 
import { createUser } from '../../store/actions/authActions'
class SignUpUser extends Component {
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
    this.props.createUser(this.state)
  }
  render() {
    return (
      <div>
        <h1>Thank you for signing up to find a volunteer.</h1>
        <h4>If you are a volunteer, please click <Link to="/signupvolunteer">Here</Link></h4>
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

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (id) => { dispatch(createUser(id)) }
  }
}

export default connect(null, mapDispatchToProps)(SignUpUser)

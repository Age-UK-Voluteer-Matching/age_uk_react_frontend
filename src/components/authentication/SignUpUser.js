import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux' 
import { createUser } from '../../store/actions/authActions'
import { v4 as uuidv4 } from 'uuid';
class SignUpUser extends Component {
  state = {
    id: uuidv4(),
    email: '',
    password: '',
    volunteer: false
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
    this.props.history.push('/userdetails/' + this.state.id)
  }
  render() {
    return (
      <div className="container">
        <h1 className="authentication-titles">Thank you for signing up to find a volunteer.</h1>
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
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (user) => { dispatch(createUser(user)) }
  }
}

export default connect(null, mapDispatchToProps)(SignUpUser)

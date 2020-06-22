import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
class FindMatch extends Component {
  render() {
    console.log(this.props.auth, 'hello from inside findmatch')
    const users = this.props.auth.users.map((user) => {
      return (
        <div key={user.id} className="row volunteer-cards">
          <div className="col">
            <img 
              src="https://www.wolflair.com/wp-content/uploads/2017/01/placeholder.jpg" 
              alt="placeholder-image"
              className="profile-image-for-volunteer-cards"  
            />
          </div>
          <div className="col-6">  
            <h4>{user.firstName} {user.lastName}</h4>
            <p>{user.email}</p>
            <p>{user.bio}</p>
          </div>
          <div className="col">  
            <div>{user.interests.map((interest) => {
              return <span key={interest.id}>- {interest.interest}<br/></span>
            })}</div>
          </div>
      </div>
      )
    })
    return (
      <div className="container">
        <h1 className="authentication-titles">Here are some matches based on your interests.....</h1>
        {users}
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
)(FindMatch)



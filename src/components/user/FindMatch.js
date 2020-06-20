import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
class FindMatch extends Component {
  render() {
    console.log(this.props.auth, 'hello from inside findmatch')
    const users = this.props.auth.users.map((user) => {
      return (<div key={user.id}>
        <h4>{user.firstName} {user.lastName}</h4>
        <p>{user.email}</p>
        <p>{user.bio}</p>
        <div>{user.interests.map((interest) => {
          return <p key={interest.id}>{interest.interest}</p>
        })}</div>
      </div>
      )
    })
    return (
      <div>
        <h1>Here are some matches based on your interests.....</h1>
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



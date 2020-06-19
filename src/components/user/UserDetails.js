import React, { Component } from 'react'
class UserDetails extends Component {
  render() {
    return (
      <div>
        <h1>Tell us a bit about yourself.....</h1>
        <form>
          <input type="textarea"/>
        </form>
      </div>
    )
  }
}

export default UserDetails
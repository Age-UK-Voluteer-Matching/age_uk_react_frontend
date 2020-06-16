import React, { Component } from 'react'

class Account extends Component {
  state = {
    id: null
  }
  componentDidMount() {
    let id = this.props.match.params.id
    this.setState({
      id: id
    })
  }
  render() {
    return (
      <div>
        this is the account component for account number {this.state.id}
      </div>
    )
  }
}

export default Account

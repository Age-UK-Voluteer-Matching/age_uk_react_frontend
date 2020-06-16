import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'

class UserInterests extends Component {
  state = {
    choices: [

    ]
  }

  handleClick = (interest) => {
    let choice = { id: uuidv4(), interest: interest }
    let choices = this.state.choices
    choices.push(choice)
    this.setState({
      choices
    })
    console.log(this.state)
  }

  render() {
    const choices = this.state.choices.map(choice => {
      return (
        <div key={choice.id}>
          {choice.interest}
        </div>
      )
    })
    return (
      <div>
        <button onClick={() => this.handleClick("music")}>Music</button>
        <button onClick={() => this.handleClick("walking")}>Walking</button>
        <button onClick={() => this.handleClick("cooking")}>Cooking</button>
        <button onClick={() => this.handleClick("gardening")}>Gardening</button>
        <button onClick={() => this.handleClick("swimming")}>Swimming</button>
        <button onClick={() => this.handleClick("baking")}>Baking</button>
        <button onClick={() => this.handleClick("reading")}>Reading</button>
        <h4>Your choices {choices}</h4>
      </div>
    )
  }
}

export default UserInterests

import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { connect } from 'react-redux'
import { addInterestsToUser } from '../../store/actions/authActions'

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

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    this.props.addInterestsToUser(this.state)
    this.props.history.push('/findmatch')
  }
  render() {
    const choices = this.state.choices.map(choice => {
      const { id, interest } = choice
      return (
        <div key={id}>
          {interest}
        </div>
      )
    })

    const interests = [
      'walking', 'music', 'cooking', 'gardening', 'swimming', 'baking', 'reading', 'travelling' 
    ]
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {interests.map((interest) => {
            return <input type="button" value={interest} name={interest} id={interest} onClick={() => this.handleClick(interest)}/>    
          })}
          <input type="submit" name="submit" value="Submit Interests" id=""/>
        </form>
        <h4>Your choices {choices}</h4>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addInterestsToUser: (user) => { dispatch(addInterestsToUser(user))}
  }
}

export default connect(null, mapDispatchToProps)(UserInterests)

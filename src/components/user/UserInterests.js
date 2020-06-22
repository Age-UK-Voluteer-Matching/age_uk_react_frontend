import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { connect } from 'react-redux'
import { addInterestsToUser } from '../../store/actions/authActions'

class UserInterests extends Component {
  state = {
    userId: this.props.match.params.id,
    choices: [

    ]
  }

  handleClick = (e) => {
    e.preventDefault()
    e.target.classList.toggle("buttonChecked");
    let choice = { id: uuidv4(), interest: e.target.name }
    let choices = this.state.choices
    choices.push(choice)
    this.setState({
      choices
    })
    console.log(this.state)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state, 'EIJOAISJDOIJ')
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
      {id: 1, name: 'walking'},
      {id: 2, name: 'music'},
      {id: 3, name: 'cooking'},
      {id: 4, name: 'gardening'},
      {id: 5, name: 'swimming'},
      {id: 6, name: 'baking'},
      {id: 7, name: 'reading'}
    ]
    return (
      <div className="container text-center">
        <form onSubmit={this.handleSubmit}>
          {interests.map((interest) => {
            return (
              <input 
                type="button" 
                key={interest.id} 
                value={interest.name} 
                name={interest.name} 
                id={interest.name} 
                onClick={this.handleClick}
              />)   
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
    addInterestsToUser: (userInterests) => { dispatch(addInterestsToUser(userInterests)) }
  }
}

export default connect(null, mapDispatchToProps)(UserInterests)

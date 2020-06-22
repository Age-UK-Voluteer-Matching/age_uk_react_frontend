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

  checkInterestIsNotInArray = (e) => {
    let filteredArray = this.state.choices.filter(interest => interest.interest !== e.target.name)
    if (filteredArray.length === this.state.choices.length) {
      return true
    } else {
      return false
    }
  }

  handleClick = (e) => {
    e.preventDefault()
    e.target.classList.toggle("buttonChecked");
    let choices
    let choice
    if (this.checkInterestIsNotInArray(e)) {
      choice = { id: uuidv4(), interest: e.target.name }
      choices = this.state.choices
      choices.push(choice)
    } else {
      choices = this.state.choices.filter(interest => interest.interest === e.target.value)  
    }
    this.setState({
      choices
    })
    console.log(this.state)
  }

  handleSubmit = (e) => {
    e.preventDefault();
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
      {id: 7, name: 'reading'},
      {id: 8, name: 'interest'},
      {id: 9, name: 'interest'}
    ]
    return (
      <div className="container text-center">
        <form onSubmit={this.handleSubmit} className="interests-form">
          {interests.map((interest) => {
            return (
              <input 
                type="button" 
                key={interest.id} 
                value={interest.name.charAt(0).toUpperCase() + interest.name.slice(1)} 
                name={interest.name} 
                id={interest.name} 
                className="buttonUnchecked"
                onClick={this.handleClick}
              />)   
          })}
          <input type="submit" name="submit" value="Submit Interests" className='interests-form-submit-button' id=""/>
        </form>
        <h4>Your choices {choices.length > 0 && choices}</h4>
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

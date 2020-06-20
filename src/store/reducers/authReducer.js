const initState = {
  users: [
    {id: 1, interests: [{id: 1, interest: 'walking'}], volunteer: false, email: 'test@test.com', firstName: 'Stephan', lastName: 'Ellenberger', bio: 'This is a demo bio and here would be everything that I want to say about myself'},
    {id: 2, interests: [{id: 1, interest: 'walking'}], volunteer: false, email: 'test@test.com', firstName: 'Tooty', lastName: 'Ellenberger', bio: 'This is a demo bio and here would be everything that I want to say about myself'},
    {id: 3, interests: [{id: 1, interest: 'walking'}], volunteer: false, email: 'test@test.com', firstName: 'Pepsi', lastName: 'Ellenberger', bio: 'This is a demo bio and here would be everything that I want to say about myself'}
  ]
}

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case 'CREATE_USER':
      console.log('creating the user')
      let newUsers = state.users.map(user => user)
      newUsers.push(action.payload)
      return {
        ...state, 
        users: newUsers
      }
    case 'CREATE_USER_DETAILS':
      console.log('editing the user details')
      let newUsersDetails = state.users.map((user) => {
        if(user.id === action.payload.id) {
          user.firstName = action.payload.firstName
          user.lastName = action.payload.lastName
          user.bio = action.payload.bio
          return user
        } else {
          return user
        }
      })
      return {
        ...state, 
        users: newUsersDetails
      }
    case 'ADD_USER_INTERESTS':
      console.log('adding user interests')
      let newUserWithInterests = state.users.map((user) => {
        if(user.id === action.payload.id) {
          user.interests = action.payload.interests
          return user
        } else {
          return user
        }
      })
      return {
        ...state,
        users: newUserWithInterests
      }
    default:
      return state
  }
}

export default authReducer
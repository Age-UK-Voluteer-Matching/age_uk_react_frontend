const initState = {
  users: [
    {id: 1, email: 'test@test.com', fullName: 'Stephan Ellenberger'},
    {id: 2, email: 'test@test.com', fullName: 'Tooty Ellenberger'},
    {id: 3, email: 'test@test.com', fullName: 'Pepsi Ellenberger'}
  ]
}

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case 'CREATE_USER':
      let newUsers = state.users.map(user => user)
      newUsers.push(action.payload)
      return {
        ...state, 
        users: newUsers
      }
    default:
      return state
  }
}

export default authReducer
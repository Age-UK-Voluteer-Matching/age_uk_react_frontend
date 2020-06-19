const initState = {
  users: [
    {id: 1, email: 'test@test.com', firstName: 'Stephan', lastName: 'Ellenberger', bio: 'This is a demo bio and here would be everything that I want to say about myself'},
    {id: 2, email: 'test@test.com', firstName: 'Tooty', lastName: 'Ellenberger', bio: 'This is a demo bio and here would be everything that I want to say about myself'},
    {id: 3, email: 'test@test.com', firstName: 'Pepsi', lastName: 'Ellenberger', bio: 'This is a demo bio and here would be everything that I want to say about myself'}
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
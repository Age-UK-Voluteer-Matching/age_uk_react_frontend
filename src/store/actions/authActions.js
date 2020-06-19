export const createUser = (user) => {
  return {
    type: 'CREATE_USER',
    payload: {
      id: user.id,
      email: user.email,
      password: user.password
    }
  }
}
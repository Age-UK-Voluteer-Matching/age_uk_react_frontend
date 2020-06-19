import { v4 as uuidv4 } from 'uuid';

export const createUser = (user) => {
  return {
    type: 'CREATE_USER',
    payload: {
      id: uuidv4(),
      email: user.email,
      password: user.password
    }
  }
}
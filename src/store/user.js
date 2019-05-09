import update from 'immutability-helper/index'
import API from '../config/API'

export default {

  login: (state, email, password) => {
    console.log('state', state)

    API.login.post({ email: 'admin@mail.com', password: '12345678' })
      .then(console.log)

    //return update(state, { user: { [key]: { $set: value } } })
    return state
  },

  registerUser: (state, email, password) => {
    console.log('state', state)

    API.register.post({ email: 'admin@mail.com', password: '12345678' })
      .then(console.log)

    //return update(state, { user: { [key]: { $set: value } } })
    return state
  },

  logout: (state) =>
    update(state, { user: { $set: null } })
}
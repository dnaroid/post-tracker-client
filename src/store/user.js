import update from 'immutability-helper/index'
import API from '../config/API'
import { saveString } from '../helpers/browser.helper'

export default {

  updateUserProp: (state, key, value) =>
    update(state, { user: { [key]: { $set: value } } }),

  login: async (state) => {
    const { email, password } = state.user
    const { auth_token } = await API.login.post({ email, password })
    if (!auth_token) { return state }
    saveString('token', auth_token)
    return update({ ...state }, { user: { logged: { $set: true } } })
  },

  registerUser: async (state) => {
    const { email, password } = state.user
    const { auth_token } = await API.register.post({ email, password })
    if (!auth_token) { return state }
    saveString('token', auth_token)
    return update(state, { user: { logged: { $set: true } } })
  },

  logout: async (state) => {
    await API.logout.post()
    saveString('token', '')
    return update({ ...state }, { user: { logged: { $set: false } } })
  }
}
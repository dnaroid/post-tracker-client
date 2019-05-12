import update from 'immutability-helper/index'
import API from '../config/API'
import { saveString } from '../helpers/browser.helper'

export default {

  updateTrackProp: (state, key, value) =>
    update(state, { track: { [key]: { $set: value } } }),

  postTrack: async (state) => {
    const { email, password } = state.user
    //const { auth_token } = await API.login.post({ email, password })
    //if (!auth_token) { return state }
    //saveString('token', auth_token)
    //return update({ ...state }, { user: { logged: { $set: true } } })
  }

}
import API from '../config/API'
import { saveString } from '../helpers/browser.helper'
import { setIn } from '../helpers/store.helper'

const here = 'user'

export default {

  updateUserProp: (state, key, value) =>
    setIn(state, here, key, value),

  login: async (state) => {
    const { email, password } = state.user
    const { auth_token } = await API.login.post({ email, password })
    if (!auth_token) { return state }
    saveString('token', auth_token)
    return setIn({ ...state }, here, 'logged', true)
  },

  registerUser: async (state) => {
    const { email, password } = state.user
    const { auth_token } = await API.register.post({ email, password })
    if (!auth_token) { return state }
    saveString('token', auth_token)
    return setIn(state, here, 'logged', true)
  },

  logout: async (state) => {
    await API.logout.post()
    saveString('token', '')
    return setIn({ ...state }, here, 'logged', false)
  }
}

import { setIn } from '../helpers/store.helper'

const here = 'track'

export default {

  updateTrackProp: (state, key, value) =>
    setIn(state, here, key, value),

  submitTrack: async (state) => {
    const { email, password } = state.user
    //const { auth_token } = await API.login.post({ email, password })
    //if (!auth_token) { return state }
    //saveString('token', auth_token)
    //return update({ ...state }, { user: { logged: { $set: true } } })
  }

}

import API from '../config/API'
import { setIn } from '../helpers/store.helper'

const here = 'tracks'

export default {

  syncTracks: async (state) => {
    const tracks = await API.track.collection()
    if (!tracks) { return state }
    return setIn(state, here, tracks)
  }

}

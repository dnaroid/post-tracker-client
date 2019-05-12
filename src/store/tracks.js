import update from 'immutability-helper'
import API from '../config/API'

export default {

  syncTracks: async (state) => {
    const tracks = await API.track.collection()
    if (!tracks) { return state }
    return update(state, { tracks: { $set: tracks } })
  }

}
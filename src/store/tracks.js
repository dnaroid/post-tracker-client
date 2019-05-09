import API from '../config/API'

export default {

  syncTracks: (state) => {
    //return update(state, { tracks: { $set: data } })
    console.log('API.track', API.track)
    window.api = API
    API.tracks.getCollection({})
      .then((data) => console.log(data))

    return state
  }

}
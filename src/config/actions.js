import settings from '../store/settings'
import track from '../store/track'
import tracks from '../store/tracks'
import user from '../store/user'

export default store => ({
  ...settings,
  ...tracks,
  ...track,
  ...user
})
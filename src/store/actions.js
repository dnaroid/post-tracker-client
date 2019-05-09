import settings from './settings'
import tracks from './tracks'
import user from './user'

export default store => ({
  ...settings,
  ...tracks,
  ...user
})
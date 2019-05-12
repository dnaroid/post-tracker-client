import update from 'immutability-helper'
import themes from '../config/themes'
import { saveState } from '../helpers/store.helper'

export default {

  setProp: (state, key, value) => {
    return saveState('settings', update(state, { settings: { [key]: { $set: value } } }))
  },

  setTheme: (state, theme) => {
    document.body.style = themes[theme]
    return saveState('settings', update(state, { settings: { theme: { $set: theme } } }))
  }
}
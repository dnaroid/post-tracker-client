import { THEME } from '../config/strings'
import { loadObject, loadString, updateTheme } from '../helpers/browser.helper'

export const initialState = {
  token: loadString('token', ''),

  user: {
    email: '',
    password: ''
  },

  settings: loadObject('settings', {
    theme: THEME.LIGHT,
    router: {}
  }, s => { updateTheme(s.theme)}),

  tracks: loadObject('tracks', {}),

  track: loadObject('track', {
    number: '',
    title: '',
    imageUrl: ''
  }),

  modals: {
    active: null,
    props: {}
  }
}

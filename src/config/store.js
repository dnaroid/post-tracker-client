import { default as create } from 'unistore'
import devtools from 'unistore/devtools'
import { loadObject, loadString } from '../helpers/browser.helper'
import { registerDeleteOpreator } from '../helpers/store.helper'
import { DEVELOPMENT, THEME } from './strings'
import themes from './themes'

registerDeleteOpreator()

const initialState = {
  token: loadString('token', ''),

  user: {
    email: '',
    password: ''
  },

  settings: loadObject('settings', {
    theme: THEME.LIGHT,
    router: {}
  }, s => {document.body.style = themes[s.theme]}),

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

export const createStore = () => DEVELOPMENT
                                 ? devtools(create(initialState))
                                 : create(initialState)
import { default as create } from 'unistore'
import devtools from 'unistore/devtools'
import { DEVELOPMENT, THEME } from '../config/strings'
import { loadLSObject } from '../helpers/browser.helper'
import { registerDeleteOpreator } from '../helpers/store.helper'

registerDeleteOpreator()

const defaultSettings = {
  theme: THEME.LIGHT,
  router: {}
}

const modals = {
  active: null,
  props: {}
}

const settings = loadLSObject('settings', defaultSettings)
const tracks = loadLSObject('tracks', {})
const user = loadLSObject('user', null)

const initialState = {
  user,
  settings,
  tracks,
  modals
}

export const createStore = () => DEVELOPMENT
                                 ? devtools(create(initialState))
                                 : create(initialState)
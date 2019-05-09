import { extend } from 'immutability-helper'
import { default as create } from 'unistore'
import devtools from 'unistore/devtools'
import { DEVELOPMENT, THEME } from '../config/strings'
import { loadLSObject } from '../helpers/browser.helper'

// register new operator for immutability-helper
extend('$delete', (key, original) => {
  const { [key]: _, ...newState } = original
  return newState
})

const defaultSettings = {
  theme: THEME.LIGHT
}

const modals = {
  active: null,
  props: {}
}

const settings = loadLSObject('settings', defaultSettings)

const initialState = {
  settings,
  modals
}

export const createStore = () => DEVELOPMENT
  ? devtools(create(initialState))
  : create(initialState)
import { extend } from 'immutability-helper/index'
import { saveObject } from './browser.helper'

export const registerDeleteOpreator = () =>
  extend('$delete', (key, original) => {
    const { [key]: _, ...newState } = original
    return newState
  })

export const saveState = (key, state) => {
  saveObject(key, state[key])
  return state
}

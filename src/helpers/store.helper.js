import { default as create } from 'unistore'
import devtools from 'unistore/devtools'
import { DEVELOPMENT } from '../config/strings'
import { initialState } from '../store'
import { saveObject } from './browser.helper'

export const saveState = (key, state) => {
  saveObject(key, state[key])
  return state
}

export const createStore = () => DEVELOPMENT
                                 ? devtools(create(initialState))
                                 : create(initialState)

const updaters = {
  3: ([s, k, v]) => ({ ...s, [k]: v }),
  4: ([s, k1, k2, v]) => ({ ...s, [k1]: { ...s[k1], [k2]: v } })
}

export const setIn = (...args) => {
  try {
    return updaters[args.length](args)
  }
  catch (e) { console.error('[setIn] Invalid path length: ' + args.join(' ')) }
  return args[0]
}


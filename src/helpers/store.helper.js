import { extend } from 'immutability-helper/index'

export const registerDeleteOpreator = () =>
  extend('$delete', (key, original) => {
    const { [key]: _, ...newState } = original
    return newState
  })

export const combine = (...actions) => store => {
  let all = {}
  actions.forEach(a => {
    const obj = a(store)
    for (let k in obj) all[k] = obj[k]
  })
  return all
}

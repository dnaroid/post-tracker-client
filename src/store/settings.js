import update from 'immutability-helper/index'

export default {

  setProp: (state, key, value) =>
    update(state, { settings: { [key]: { $set: value } } }),

  setTheme: (state, theme) =>
    update(state, { settings: { theme: { $set: theme } } })
}
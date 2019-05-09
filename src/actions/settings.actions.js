import update from 'immutability-helper'
import { THEME } from '../config/strings'

export const actionsSettings = store => ({

  setValue: (state, key, value) =>
    update(state, { settings: { $set: { [key]: value } } }),

  setTheme: (state, theme) => {
    if (theme === THEME.DARK) { document.body.classList.add('mdc-theme--dark') }
    else { document.body.classList.remove('mdc-theme--dark') }
    return update(state, { settings: { $set: { theme } } })
  }
})
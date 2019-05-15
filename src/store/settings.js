import { updateTheme } from '../helpers/browser.helper'
import { saveState, setIn } from '../helpers/store.helper'

const here = 'settings'

export default {

  setProp: (state, key, value) =>
    saveState(here, setIn(state, here, key, value)),

  setTheme: (state, theme) => {
    updateTheme(theme)
    return saveState(here, setIn(state, here, 'theme', theme))
  }
}

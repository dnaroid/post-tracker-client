export const THEME = {
  DARK: 'dark',
  LIGHT: 'light'
}

const GLOBAL = window

export const DEVELOPMENT = GLOBAL && GLOBAL.location.hostname === 'localhost'

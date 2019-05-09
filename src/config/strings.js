export const GLOBAL = window

export const DEVELOPMENT = GLOBAL && GLOBAL.location.hostname === 'localhost'

export const THEME = {
  DARK: 'dark',
  LIGHT: 'light'
}

export const API_HOST = DEVELOPMENT
                        ? 'http://localhost:5000/rest'
                        : 'https://dnaroid.pythonanywhere.com/rest'
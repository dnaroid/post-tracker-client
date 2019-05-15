export const GLOBAL = window

export const DEVELOPMENT = GLOBAL && GLOBAL.location.hostname === 'localhost'

export const THEME = {
  DARK: 'dark',
  LIGHT: 'light'
}

export const ROUTE = {
  Authorisation: '/auth',
  Tracks: '/',
  Profile: '/profile',
  Settings: '/settings',
  Track: '/track'
}

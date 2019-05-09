export const setByProps = obj =>
  props => obj[Object.keys(obj).find(k => props[k])] || obj._
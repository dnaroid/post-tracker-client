export const props = obj =>
  props => Object.keys(obj).reduce((a, c) => a + props[c] ? obj[c] : '', '') || ''
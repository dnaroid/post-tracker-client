export const saveLSString = (key, value) => localStorage.setItem(key, value)

export const loadLSString = (key, defaultValue = 'null') => localStorage.getItem(key) || defaultValue

export const loadLSObject = (key, defaultValue = {}) => {
  const str = loadLSString(key, null)
  return str ? JSON.parse(str) : defaultValue
}

export const saveLSObject = (key, obj) => {
  saveLSString(key, JSON.stringify({ ...obj, __updated: date.toString() }))
}
export const combine = (...actions) => store => {
  let all = {}
  actions.forEach(a => {
    const obj = a(store)
    for (let k in obj) all[k] = obj[k]
  })
  return all
}

const isObject = v => v && typeof v === 'object' && !Array.isArray(v)

export const deepAssign = (result, ...objects) => {
  if (objects.every(isObject)) {
    const allKeys = new Set(objects.reduce((a, c) => ([...a, ...Object.keys(c)]), []))

    allKeys.forEach(key => {
      const value = objects.map(obj => obj[key])
        .filter(v => v !== undefined)
        .reduce((a, c) => ({ ...a, ...c }))

      if (isObject(value)) {
        result[key] = Array.isArray(value) ? [] : {}
        deepAssign(result[key], value)
      }
      else {
        result[key] = value
      }
    })
  }
}

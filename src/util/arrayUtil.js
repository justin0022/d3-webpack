const flatten = arr => arr.reduce((acc, cur) =>
  Array.isArray(cur)
    ? [...acc, ...cur]
    : [...acc, cur]
  , [])

const getKeys = arrOfObj => flatten(
  arrOfObj.map(x => Object.keys(x))
)

export {
  getKeys,
  flatten
}

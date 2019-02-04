const createAndAppendChart = (selectors, graphId) => {
  const div = document.createElement('div')
  div.setAttribute('id', graphId)
  const location = document.querySelector(selectors)
  location.appendChild(div)
  return graphId
}

export {
  createAndAppendChart
}

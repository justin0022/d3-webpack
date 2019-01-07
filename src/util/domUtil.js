export function createAndAppendToBody (id) {
  const div = document.createElement('div')
  div.setAttribute('id', id)
  const body = document.body
  body.appendChild(div)
  return div
}

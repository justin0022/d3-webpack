const set = (chartConfig, propertyName, value) => ({ ...chartConfig, [propertyName]: value })

export function setWidth (chartConfig, width) {
  return set(chartConfig, 'width', width)
}

export function setHeight (chartConfig, height) {
  return set(chartConfig, 'height', height)
}

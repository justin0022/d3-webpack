// Adapted from here: https://beta.observablehq.com/@mbostock/d3-calendar-view

import * as d3 from 'd3'
import { margin } from '../constants/constants'
import { adjustViewport } from '../util/chartUtils'

const pathMonth = t => {
  const n = weekday === 'weekday' ? 5 : 7
  const d = Math.max(0, Math.min(n, countDay(t)))
  const w = timeWeek.count(d3.timeYear(t), t)
  return `${d === 0 ? `M${w * cellSize},0`
    : d === n ? `M${(w + 1) * cellSize},0`
      : `M${(w + 1) * cellSize},0V${d * cellSize}H${w * cellSize}`}V${n * cellSize}`
}

const createCalendar = ({ data, width, height, id, tip }) => {
  const [aWidth, aHeight] = adjustViewport(width, height, margin)

  const svg = d3.select(`#${id}`).append('svg')
    .attr('width', aWidth)
    .attr('height', aHeight)

  const month = svg.append(g)
    .selectAll(g)
    .data(data)
    .enter().append('g')

  return svg
}

export default createCalendar

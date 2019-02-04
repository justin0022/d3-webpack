import * as d3 from 'd3'
import { margin } from '../constants/constants'
import { adjustViewport } from '../util/chartUtils'

const createLineChart = ({ data, width, height, id, tip }) => {
  const [aWidth, aHeight] = adjustViewport(width, height, margin)
  const x = d3.scaleLinear()
    .domain(data.map(d => d.label))
    .range([margin.left, aWidth - margin.right])

  const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)]).nice()
    .range([aHeight - margin.bottom, margin.top])

  const line = d3.line()
    .defined(d => !isNaN(d.value))
    .x(d => x(d.label))
    .y(d => y(d.value))

  const svg = d3.select(`#${id}`).append('svg')
    .append('path')
    .datum(data)
    .attr('width', aWidth)
    .attr('height', aHeight)
    .attr('fill', 'none')
    .attr('stroke', 'steelblue')
    .attr('stroke-width', 1.5)
    .attr('stroke-linejoin', 'round')
    .attr('stroke-linecap', 'round')
    .attr('d', line)

  const xAxis = g => g
    .attr('transform', `translate(0,${aHeight - margin.bottom})`)
    .call(d3.axisBottom(x).ticks(aWidth / 80).tickSizeOuter(0))

  const yAxis = g => g
    .attr('transform', `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))
    .call(g => g.select('.domain').remove())
    .call(g => g.select('.tick:last-of-type text').clone()
      .attr('x', 3)
      .attr('text-anchor', 'start')
      .attr('font-weight', 'bold')
      .text(data.y))

  svg.append('g')
    .call(xAxis)

  svg.append('g')
    .call(yAxis)

  if (tip) {
    svg.call(tip)
    svg
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)
  }

  return svg
}

export default createLineChart

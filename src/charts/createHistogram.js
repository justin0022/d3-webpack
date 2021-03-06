import * as d3 from 'd3'
import { margin } from '../constants/constants'
import { adjustViewport } from '../util/chartUtils'

const createHistogram = ({ data, width, height, id, tip }) => {
  const [aWidth, aHeight] = adjustViewport(width, height, margin)

  const x = d3.scaleLinear()
    .domain(d3.extent(data)).nice()
    .range([margin.left, aWidth - margin.right])

  const bins = d3.histogram()
    .domain(x.domain())
    .thresholds(x.ticks(10))(data)

  const y = d3.scaleLinear()
    .domain([0, d3.max(bins, d => d.length)]).nice()
    .range([aHeight - margin.bottom, margin.top])

  const svg = d3.select(`#${id}`).append('svg')
    .attr('width', aWidth)
    .attr('height', aHeight)

  const bar = svg.selectAll('rect')
    .data(bins).enter()
    .append('rect')
    .attr('x', d => x(d.x0) + 1)
    .attr('width', d => Math.max(0, x(d.x1) - x(d.x0) - 1))
    .attr('y', d => y(d.length))
    .attr('height', d => y(0) - y(d.length))

  const xAxis = g => g
    .attr(`transform`, `translate(0, ${aHeight - margin.bottom})`)
    .call(d3.axisBottom(x).tickSizeOuter(0))
    .call(g => g.append('text')
      .attr('x', aWidth - margin.right)
      .attr('y', -4)
      .attr('fill', '#000')
      .attr('font-weight', 'bold')
      .attr('text-anchor', 'end')
      .text(data.x)
    )

  const yAxis = g => g
    .attr('transform', `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))
    .call(g => g.select('.tick:last-of-type text').clone()
      .attr('x', 4)
      .attr('fill', '#000')
      .attr('text-anchor', 'start')
      .attr('font-weight', 'bold')
      .text(data.y)
    )

  svg.append('g')
    .call(xAxis)

  svg.append('g')
    .call(yAxis)

  if (tip) {
    svg.call(tip)
    bar
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)
  }

  return svg
}

export default createHistogram

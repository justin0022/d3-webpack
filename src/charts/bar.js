import * as d3 from 'd3'
import { margin } from '../constants/constants'

const bar = ({ data, width, height, id, tip }) => {
  const aWidth = width - margin.left - margin.right
  const aHeight = height - margin.top - margin.bottom

  const x = d3.scaleBand()
    .domain(data.map(d => d.name))
    .range([margin.left, aWidth - margin.right])
    .padding(0.1)

  const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.age)]).nice()
    .range([aHeight - margin.bottom, margin.top])

  const svg = d3.select(id).append('svg')
    .attr('style', 'display: block;')
    .attr('width', aWidth)
    .attr('height', aHeight)

  if (tip) svg.call(tip)

  svg.append('g')
    .attr('fill', 'steelblue')
    .attr('transform', `translate(${margin.left}, ${margin.right})`)

  svg.selectAll('.bar')
    .data(data).enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', d => x(d.name))
    .attr('width', x.bandwidth())
    .attr('y', d => y(d.age))
    .attr('height', d => y(0) - y(d.age))
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide)

  svg.append('g')
    .attr('transform', `translate(0, ${aHeight - margin.bottom})`)
    .call(d3.axisBottom(x))

  svg.append('g')
    .attr('transform', `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))

  return svg.node()
}

export default bar

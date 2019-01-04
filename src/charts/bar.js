import * as d3 from 'd3'
import { margin } from '../constants/constants'

const bar = ({ data, width, height, id }) => {
  const aWidth = width - margin.left - margin.right
  const aHeight = height - margin.top - margin.bottom

  const x = d3.scaleBand()
    .domain(data.map(d => d.name))
    .range([margin.left, width - margin.right])
    .padding(0.1)

  const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.age)]).nice()
    .range([height - margin.bottom, margin.top])

  const svg = d3.select(id).append('svg')
    .attr('style', 'display: block;')
    .attr('width', aWidth)
    .attr('height', aHeight)

  svg.append('g')
    .attr('fill', 'steelblue')
    .attr('transform', `translate(${margin.left}, ${margin.right})`)

  svg.selectAll('.bar')
    .data(data)
    .enter().append('rect')
    .attr('class', 'bar')
    .attr('x', d => x(d.name))
    .attr('width', x.bandwidth())
    .attr('y', d => y(d.age))
    .attr('height', d => height - y(d.age))

  svg.append('g')
    .attr('transform', `translate(0, ${aHeight})`)
    .call(d3.axisBottom(x))

  svg.append('g')
    .call(d3.axisLeft(y))

  console.log(svg.node())
  return svg.node()
}

export default bar

import * as d3 from 'd3'
import { margin } from '../constants/constants'

const bar = ({ data, width, height, id }) => {
  const aWidth = width - margin.left - margin.right
  const aHeight = height - margin.top - margin.bottom

  const x = d3.scaleBand()
    .range([0, aWidth])
    .padding(0.1)
  const y = d3.scaleLinear()
    .range([aHeight, 0])

  const svg = d3.select(document.createElement('div')).append('svg')
    .attr('width', width)
    .attr('height', height)

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

  return svg.node()
}

export default bar

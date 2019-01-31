import * as d3 from 'd3'
import { margin } from '../constants/constants'
import { getKeys } from '../util/arrayUtil'

const createGroupedBarChart = ({ data, width, height, id, tip }) => {
  const aWidth = width - margin.left - margin.right
  const aHeight = height - margin.top - margin.bottom

  const x0 = d3.scaleBand()
    .domain(data.map(d => d.label))
    .range([margin.left, aWidth - margin.right])
    .padding(0.1)

  const x1 = d3.scaleBand()
    .domain(getKeys(data.slice(0)))
    .padding(0.5)

  const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.age)]).nice()
    .range([aHeight - margin.bottom, margin.top])

  const svg = d3.select(id).append('svg')
    .attr('width', aWidth)
    .attr('height', aHeight)

  const g = svg.append('g').attr('transform', `translate(${margin.left},0)`)

  g.append('g')
    .data(data)
    .enter().append('g')
    .attr('transform', d => `translate(${x0(d.label)}, 0)`)
    .selectAll('rect')
    .enter().append('rect')
    .attr('x', d => x1(x1.label))
    .attr('y', d => y())

  const bar = svg.selectAll('.bar')

  return svg.node()
}

export default createGroupedBarChart

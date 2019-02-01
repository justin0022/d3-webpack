import * as d3 from 'd3'
import { margin } from '../constants/constants'
import { getValues, flatten } from '../util/arrayUtil'

const createGroupedBarChart = ({ data, width, height, id, tip }) => {
  const aWidth = width - margin.left - margin.right
  const aHeight = height - margin.top - margin.bottom

  const x0 = d3.scaleBand()
    .domain(data.map(d => d.label))
    .range([margin.left, aWidth - margin.right])
    .padding(0.1)

  const keys = Object.keys(data[0].data)

  const x1 = d3.scaleBand()
    .domain(keys)
    .padding(0.5)

  const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => getValues(d.data))]).nice()
    .range([aHeight - margin.bottom, margin.top])

  const svg = d3.select(id).append('svg')
    .attr('width', aWidth)
    .attr('height', aHeight)

  const g = svg.append('g').attr('transform', `translate(${margin.left},0)`)

  g.append('g')
    .selectAll('g')
    .data(data).enter()
    .append('g')
    .attr('transform', d => `translate(${x0(d.label)}, 0)`)
    .selectAll('rect')
    .data(d => {
      return keys.map(key => {
        const obj = d.data
        console.log(d.data[key])
        return ({ key, value: d.data[key] })
      })
    })
    .enter().append('rect')
    .attr('x', d => x1(d.key))
    .attr('y', d => y(d.value))
    .attr('width', x1.bandwidth())
    .attr('height', d => height - y(d.value))

  g.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(0,${height})`)
    .call(d3.axisBottom(x0))

  g.append('g')
    .attr('class', 'axis')
    .call(d3.axisLeft(y).ticks(null, 's'))
  // .append('text')
  //   .attr('x', 2)
  //   .attr('y', y(y.ticks().pop()) + 0.5)
  //   .attr('dy', '0.32em')
  //   .attr('fill', '#000')
  //   .attr('font-weight', 'bold')
  //   .attr('text-anchor', 'start')
    // .text('Population')

  return svg.node()
}

export default createGroupedBarChart

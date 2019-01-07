import * as d3 from 'd3'

const createXAxis = (g, { aWidth, right, aHeight, bottom, label, x }) => g
  .attr(`transform`, `translate(0, ${aHeight - bottom})`)
  .call(d3.axisBottom(x).tickSizeOuter(0))
  .call(g => g.append('text')
    .attr('x', aWidth - right)
    .attr('y', -4)
    .attr('fill', '#000')
    .attr('font-weight', 'bold')
    .attr('text-anchor', 'end')
    .text(label)
  )

const createYAxis = (g, { left, y, label }) => g
  .attr('transform', `translate(${left},0)`)
  .call(d3.axisLeft(y))
  .call(g => g.select('.domain').remove())
  .call(g => g.select('.tick:last-of-type text').clone()
    .attr('x', 4)
    .attr('text-anchor', 'start')
    .attr('font-weight', 'bold')
    .text(label)
  )

export {
  createYAxis,
  createXAxis
}

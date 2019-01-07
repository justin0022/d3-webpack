
import bar from './charts/bar'
import d3tip from 'd3-tip'
import { createAndAppendToBody } from './util/domUtil'

const data1 = [
  { name: 'Bob', age: 33 },
  { name: 'Robin', age: 12 },
  { name: 'Anne', age: 41 },
  { name: 'Mark', age: 16 },
  { name: 'Joe', age: 59 },
  { name: 'Eve', age: 38 },
  { name: 'Karen', age: 21 },
  { name: 'Kirsty', age: 25 },
  { name: 'Chris', age: 30 },
  { name: 'Lisa', age: 47 },
  { name: 'Tom', age: 5 },
  { name: 'Stacy', age: 20 },
  { name: 'Charles', age: 13 },
  { name: 'Mary', age: 29 }
]
const data2 = [
  { name: 'Bob', age: 12 },
  { name: 'Robin', age: 34 },
  { name: 'Anne', age: 78 },
  { name: 'Mark', age: 23 },
  { name: 'Joe', age: 10 },
  { name: 'Eve', age: 44 },
  { name: 'Karen', age: 4 }
]

var tip = d3tip()
  .attr('class', 'd3-tip')
  .html(d => `<strong>${d.age}</strong>`)

const chart1 = createAndAppendToBody('chart1')
const chart2 = createAndAppendToBody('chart2')
const bar1 = bar({ data: data1, width: 1000, height: 600, id: '#chart1', tip })
const bar2 = bar({ data: data2, width: 1000, height: 600, id: '#chart2', tip })

chart1.appendChild(bar1)
chart2.appendChild(bar2)

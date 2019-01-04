import * as d3 from 'd3'
import bar from './charts/bar'

const data = [
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

const chart = bar({ data, width: 1000, height: 600, id: 'barChart1' })

document.body.appendChild(chart)

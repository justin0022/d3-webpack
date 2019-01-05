import * as d3 from 'd3'
import bar from './charts/bar'

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
  { name: 'Karen', age: 4 },
  { name: 'Kirsty', age: 56 },
  { name: 'Chris', age: 12 },
  { name: 'Lisa', age: 41 },
  { name: 'Tom', age: 5 },
  { name: 'Stacy', age: 2 },
  { name: 'Charles', age: 92 },
  { name: 'Mary', age: 13 }
]

const chart1 = document.getElementById('chart1')
const chart2 = document.getElementById('chart2')
chart1.appendChild(bar({ data: data1, width: 1000, height: 600, id: '#chart1' }))
chart2.appendChild(bar({ data: data2, width: 1000, height: 600, id: '#chart2' }))

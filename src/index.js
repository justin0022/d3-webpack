
import createBarChart from './charts/createBarChart'
import { createAndAppendToBody } from './util/domUtil'
import createToolTip from './components/createToolTip'

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

const chart1 = createAndAppendToBody('chart1')
const chart2 = createAndAppendToBody('chart2')

const barChartConfig = {
  data: data1,
  width: 1000,
  height: 600,
  id: '#chart1',
  tip: createToolTip(d => `<p>${d.age}</p>`)
}

const bar1 = createBarChart(barChartConfig)
const bar2 = createBarChart({ ...barChartConfig, data: data2 })

chart1.appendChild(bar1)
chart2.appendChild(bar2)

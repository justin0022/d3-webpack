
import createBarChart from './charts/createBarChart'
import createHistogram from './charts/createHistogram'
import { createAndAppendToBody } from './util/domUtil'
import createToolTip from './components/createToolTip'
import { barChartData1, barChartData2, histogramData } from '../data/data'

const chart1 = createAndAppendToBody('chart1')
const chart2 = createAndAppendToBody('chart2')
const chart3 = createAndAppendToBody('chart3')

const barChartConfig = {
  data: barChartData1,
  width: 1000,
  height: 600,
  id: '#chart1',
  tip: createToolTip(d => `<p>${d.age}</p>`)
}

const bar1 = createBarChart(barChartConfig)
const bar2 = createBarChart({ ...barChartConfig, data: barChartData2 })

histogramData.x = 'Unemployment %'
histogramData.y = 'Countries'

const histogram = createHistogram({
  data: histogramData,
  width: 1000,
  height: 600,
  id: '#chart3',
  tip: createToolTip(d => `<p>${d.length}</p>`)
})

chart1.appendChild(bar1)
chart2.appendChild(bar2)
chart3.appendChild(histogram)

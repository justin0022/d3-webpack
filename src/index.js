
import createBarChart from './charts/createBarChart'
import createHistogram from './charts/createHistogram'
import createGroupedBarChart from './charts/createGroupedBarChart'
import { createAndAppendToBody } from './util/domUtil'
import createToolTip from './components/createToolTip'
import { barChartData1, barChartData2, histogramData, groupedBarChartData } from '../data/data'

const chart1 = createAndAppendToBody('chart1')
const chart2 = createAndAppendToBody('chart2')
const chart3 = createAndAppendToBody('chart3')
const chart4 = createAndAppendToBody('chart4')

const barChartConfig = {
  data: barChartData1,
  width: 1000,
  height: 600,
  id: '#chart1',
  tip: createToolTip(d => `<p>${d.data}</p>`)
}

const barChart1 = createBarChart(barChartConfig)
const barChart2 = createBarChart({ ...barChartConfig, data: barChartData2 })
const groupedBarChart = createGroupedBarChart(
  { ...barChartConfig,
    data: groupedBarChartData,
    tip: createToolTip(d => `<p>${d.value}</p>`)
  }
)

histogramData.x = 'Unemployment %'
histogramData.y = 'Countries'

const histogram = createHistogram({
  data: histogramData,
  width: 1000,
  height: 600,
  id: '#chart3',
  tip: createToolTip(d => `<p>${d.length}</p>`)
})

chart1.appendChild(barChart1)
chart2.appendChild(barChart2)
chart3.appendChild(histogram)
chart4.appendChild(groupedBarChart)

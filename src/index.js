
import createBarChart from './charts/createBarChart'
import createHistogram from './charts/createHistogram'
import createGroupedBarChart from './charts/createGroupedBarChart'
import { createAndAppendChart } from './util/domUtil'
import createToolTip from './components/createToolTip'
import { barChartData1, barChartData2, histogramData, groupedBarChartData } from '../data/data'

const chart1 = createAndAppendChart('body', 'chart1')
const chart2 = createAndAppendChart('body', 'chart2')
const chart3 = createAndAppendChart('body', 'chart3')
const chart4 = createAndAppendChart('body', 'chart4')

console.log(chart1)

const barChartConfig = {
  data: barChartData1,
  width: 1000,
  height: 600,
  id: chart1,
  tip: createToolTip(d => `<p>${d.data}</p>`)
}

const barChart1 = createBarChart(barChartConfig)
const barChart2 = createBarChart({ ...barChartConfig, id: chart2, data: barChartData2 })
const groupedBarChart = createGroupedBarChart(
  { ...barChartConfig,
    data: groupedBarChartData,
    id: chart3,
    tip: createToolTip(d => `<p>${d.value}</p>`)
  }
)

histogramData.x = 'Unemployment %'
histogramData.y = 'Countries'

const histogram = createHistogram({
  data: histogramData,
  width: 1000,
  height: 600,
  id: chart4,
  tip: createToolTip(d => `<p>${d.length}</p>`)
})

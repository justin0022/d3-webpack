
import createBarChart from './charts/createBarChart'
import createHistogram from './charts/createHistogram'
import createGroupedBarChart from './charts/createGroupedBarChart'
import createLineChart from './charts/createLineChart'
import { createAndAppendChart } from './util/domUtil'
import createToolTip from './components/createToolTip'
import { barChartData1, barChartData2, histogramData, groupedBarChartData, lineChartData } from '../data/data'

const chart1 = createAndAppendChart('body', 'chart1')
const chart2 = createAndAppendChart('body', 'chart2')
const chart3 = createAndAppendChart('body', 'chart3')
const chart4 = createAndAppendChart('body', 'chart4')
const chart5 = createAndAppendChart('body', 'chart5')

const barChartConfig = {
  data: barChartData1,
  width: 1000,
  height: 600,
  id: chart1,
  tip: createToolTip(d => `<p>${d.data}</p>`)
}

createBarChart(barChartConfig)
createBarChart({ ...barChartConfig, id: chart2, data: barChartData2 })
createGroupedBarChart(
  { ...barChartConfig,
    data: groupedBarChartData,
    id: chart3,
    tip: createToolTip(d => `<p>${d.value}</p>`)
  }
)

histogramData.x = 'Unemployment %'
histogramData.y = 'Countries'

createHistogram({
  data: histogramData,
  width: 1000,
  height: 600,
  id: chart4,
  tip: createToolTip(d => `<p>${d.length}</p>`)
})

const lineChart = createLineChart({
  data: lineChartData,
  width: 1000,
  height: 600,
  id: chart5,
  tip: createToolTip(d => `<p>${d.value}</p>`)
})

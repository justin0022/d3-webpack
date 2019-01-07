/* global test, expect */
import { setWidth, setHeight, setData } from '../util/chartUtils'

test('setWidth sets width of chart config object', () => {
  let chartConfig = {}
  let expectedChartConfig = { width: 500 }
  expect(setWidth(chartConfig, 500)).toEqual(expectedChartConfig)

  chartConfig = {
    data: [1, 2, 3, 4, 5],
    width: 1000,
    height: 600,
    id: '#chart1'
  }
  expectedChartConfig = {
    data: [1, 2, 3, 4, 5],
    width: 500,
    height: 600,
    id: '#chart1'
  }
  expect(setWidth(chartConfig, 500)).toEqual(expectedChartConfig)
})

test('setHeight sets height of chart config object', () => {
  let chartConfig = {}
  let expectedChartConfig = { height: 500 }
  expect(setHeight(chartConfig, 500)).toEqual(expectedChartConfig)

  chartConfig = {
    data: [1, 2, 3, 4, 5],
    width: 1000,
    height: 600,
    id: '#chart1'
  }
  expectedChartConfig = {
    data: [1, 2, 3, 4, 5],
    width: 1000,
    height: 1000,
    id: '#chart1'
  }

  expect(setHeight(chartConfig, 1000)).toEqual(expectedChartConfig)
})

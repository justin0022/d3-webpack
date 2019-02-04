import * as d3 from 'd3'
import { margin } from '../constants/constants'
import { adjustViewport } from '../util/chartUtils'

const createCalendarHeatmap = ({ data, width, height, id, tip }) => {
  const [aWidth, aHeight] = adjustViewport(width, height, margin)
}

export default createCalendarHeatmap

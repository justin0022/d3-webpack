import * as d3 from 'd3'
import { margin } from '../constants/constants'
import { adjustViewport } from '../util/chartUtils'

const createTable = ({ data, width, height }) => {
  const [aWidth, aHeight] = adjustViewport(width, height, margin)
}

export default createTable

import * as d3 from 'd3'
import { margin } from '../constants/constants'
import { adjustViewport } from '../util/chartUtils'

const createWhatIfCalculator = ({ data, width, height }) => {
  const [aWidth, aHeight] = adjustViewport(width, height, margin)
}

export default createWhatIfCalculator

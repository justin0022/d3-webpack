const barChartData1 = [
  { label: 'Bob', data: 33 },
  { label: 'Robin', data: 12 },
  { label: 'Anne', data: 41 },
  { label: 'Mark', data: 16 },
  { label: 'Joe', data: 59 },
  { label: 'Eve', data: 38 },
  { label: 'Karen', data: 21 },
  { label: 'Kirsty', data: 25 },
  { label: 'Chris', data: 30 },
  { label: 'Lisa', data: 47 },
  { label: 'Tom', data: 5 },
  { label: 'Stacy', data: 20 },
  { label: 'Charles', data: 13 },
  { label: 'Mary', data: 29 }
]
const barChartData2 = [
  { label: 'Bob', data: 12 },
  { label: 'Robin', data: 34 },
  { label: 'Anne', data: 78 },
  { label: 'Mark', data: 23 },
  { label: 'Joe', data: 10 },
  { label: 'Eve', data: 44 },
  { label: 'Karen', data: 4 }
]

const histogramData = [5.1, 4.9, 8.6, 6.2, 5.1, 7.1, 6.7, 6.1, 5, 5, 5.2, 7.9, 11.1, 5.9, 5.5, 5.6, 6.5, 7.7, 5.7, 6.7, 5.7, 4.8, 5.6, 9.5, 5.7, 4.7, 6.3]

const groupedBarChartData = [
  {
    label: 'CA',
    data: {
      '0-10': 2704659,
      '10-20': 4499890,
      '20-30': 2159981,
      '30-40': 3853788,
      '40-50': 10604510,
      '50-60': 8819342,
      '60-70': 4114496
    }
  },
  {
    label: 'TX',
    data: {
      '0-10': 2027307,
      '10-20': 3277946,
      '20-30': 1420518,
      '30-40': 2454721,
      '40-50': 7017731,
      '50-60': 5656528,
      '60-70': 2472223
    }
  },
  {
    label: 'FL',
    data: {
      '0-10': 1140516,
      '20-30': 925060,
      '30-40': 2454721,
      '40-50': 4782119,
      '50-60': 4746856,
      '60-70': 3187797
    }
  },
  {
    label: 'IL',
    data: {
      '0-10': 894368,
      '10-20': 1558919,
      '20-30': 725973,
      '30-40': 1311479,
      '40-50': 3596343,
      '50-60': 3239173,
      '60-70': 1575308
    }
  },
  {
    label: 'PA',
    data: {
      '0-10': 737462,
      '10-20': 1345341,
      '20-30': 679201,
      '30-40': 1203944,
      '40-50': 3157759,
      '50-60': 3414001,
      '60-70': 1910571
    }
  }
]

export {
  barChartData1,
  barChartData2,
  histogramData,
  groupedBarChartData
}

/* global test, expect */
import { flatten, getValues } from '../util/arrayUtil'

test('flatten flattens arrays one depth', () => {
  expect(flatten([])).toEqual([])
  expect(flatten([[]])).toEqual([])
  expect(flatten([[], []])).toEqual([], [])
  expect(flatten([1, 2, [1, 2, 3]])).toEqual([1, 2, 1, 2, 3])
  expect(flatten([1, 2, [1, 2, 3, [4]]])).toEqual([1, 2, 1, 2, 3, [4]])
})

test('getValues should return flattened values from Object', () => {
  const input = {
    hello: [1, 2, 3, 4, 5],
    there: [6, 7, 8, 9, 10]
  }

  const output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  expect(getValues(input)).toEqual(output)
})

import { getDistanceBetweenPoints } from './math'

// results checked with https://www.calculatorsoup.com/calculators/geometry-plane/distance-two-points.php
describe('get distance between two points, rounded to two decimals', () => {
  test('0,0 and 0,0 --> 0', async () => {
    const distance = getDistanceBetweenPoints(0, 0, 0, 0)
    expect(distance).toStrictEqual(0)
  })
  test('0, 0 and 1, 1 --> 1.41', async () => {
    const distance = getDistanceBetweenPoints(0, 0, 1, 1)
    expect(distance).toStrictEqual(1.41)
  })
  test('0, 0 and 4, 4 --> 5.66', async () => {
    const distance = getDistanceBetweenPoints(0, 0, 4, 4)
    expect(distance).toStrictEqual(5.66)
  })
  test('-4, 21 and 15, -18 --> 43.38', async () => {
    const distance = getDistanceBetweenPoints(-4, 21, 15, -18)
    expect(distance).toStrictEqual(43.38)
  })
})

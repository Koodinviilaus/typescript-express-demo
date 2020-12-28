import { getDistanceBetweenPoints } from './math'

// results checked with https://www.calculatorsoup.com/calculators/geometry-plane/distance-two-points.php
describe('math.ts', () => {
  test('getDistanceBetweenPoints()', async () => {
    const distance = getDistanceBetweenPoints(0, 0, 0, 0)
    expect(distance).toStrictEqual(0)
  })
  test('getDistanceBetweenPoints(0, 0, 1, 1)', async () => {
    const distance = getDistanceBetweenPoints(0, 0, 1, 1)
    expect(distance).toStrictEqual(1.41)
  })
  test('getDistanceBetweenPoints(0, 0, 4, 4)', async () => {
    const distance = getDistanceBetweenPoints(0, 0, 4, 4)
    expect(distance).toStrictEqual(5.66)
  })
})

import { getDistanceBetweenPoints } from './math'

describe('math.ts', () => {
  test('getDistanceBetweenPoints(), zero', async () => {
    const distance = getDistanceBetweenPoints(0, 0, 0, 0)
    expect(distance).toStrictEqual(0)
  })
  test('getDistanceBetweenPoints(), ', async () => {
    const distance = getDistanceBetweenPoints(0, 0, 1, 1)
    expect(distance).toStrictEqual(1)
  })
})

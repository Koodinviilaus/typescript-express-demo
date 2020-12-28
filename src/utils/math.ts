const roundToTwoDecimals = (num: number): number =>
  Math.round((num + Number.EPSILON) * 100) / 100

/** Uses the two dimensional distance formula https://en.wikipedia.org/wiki/Euclidean_distance,
 * returning result in two decimal precision */
const getDistanceBetweenPoints = (
  x0: number,
  y0: number,
  x1: number,
  y1: number
): number => {
  const distance = Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2))
  // method https://stackoverflow.com/a/11832950
  const distanceTwoDecimals = roundToTwoDecimals(distance)
  return distanceTwoDecimals
}

export { roundToTwoDecimals, getDistanceBetweenPoints }

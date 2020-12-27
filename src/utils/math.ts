/** Uses the two dimensional distance formula https://brilliant.org/wiki/distance-formula */
const getDistanceBetweenPoints = (
  x0: number,
  y0: number,
  x1: number,
  y1: number
): number => {
  const distance = Math.sqrt((Math.pow(x0 - x1, 2), Math.pow(y0 - y1, 2)))
  return distance
}

export { getDistanceBetweenPoints }

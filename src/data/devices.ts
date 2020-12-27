import { DeviceLocation } from './../types/linkStations'

const defaultLocations = [
  [0, 0],
  [100, 100],
  [15, 10],
  [18, 18]
]

const getDeviceLocations = (
  locationPoints: number[][] = defaultLocations
): DeviceLocation[] =>
  locationPoints.map(([deviceX, deviceY]) => ({
    deviceX,
    deviceY
  }))

export { getDeviceLocations }

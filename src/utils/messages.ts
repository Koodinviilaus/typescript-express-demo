import { DeviceLocation, LinkStationInfoWithPower } from '../types/linkStations'

const getBestLinkStationMessage = (
  { x, y, power }: LinkStationInfoWithPower,
  { deviceX, deviceY }: DeviceLocation
): string =>
  `Best link station for point ${deviceY}, ${deviceX} is ${x}, ${y} with power ${power}.`

const getNoLinkStationMessage = ({
  deviceX,
  deviceY
}: DeviceLocation): string =>
  `No link station within reach for point ${deviceX}, ${deviceY}.`

export { getBestLinkStationMessage, getNoLinkStationMessage }

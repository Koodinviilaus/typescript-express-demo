import { getDeviceLocations } from '../data/devices'
import { getLinkStationWithMostPower } from '../utils/linkStations'
import {
  getBestLinkStationMessage,
  getNoLinkStationMessage
} from '../utils/messages'

/** root response is to print the "best link station" or "no link station" message for all given points */
const getRootResponse = (): string => {
  let response = ''
  const deviceLocations = getDeviceLocations()
  deviceLocations.forEach((deviceLocation, index) => {
    const bestLinkStation = getLinkStationWithMostPower(deviceLocation)
    if (bestLinkStation) {
      response =
        response +
        (index !== 0 ? '<br>' : '') +
        getBestLinkStationMessage(bestLinkStation, deviceLocation)
    } else {
      response =
        response +
        (index !== 0 ? '<br>' : '') +
        getNoLinkStationMessage(deviceLocation)
    }
  })
  return response
}

export { getRootResponse }

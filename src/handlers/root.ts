/* eslint-disable no-console */
import { getDeviceLocations } from '../data/devices'
import { getLinkStationWithMostPower } from '../utils/linkStations'
import { LinkStationInfo } from '../types/linkStations'
import {
  getBestLinkStationMessage,
  getNoLinkStationMessage
} from '../utils/messages'

/** root response is to print the "best link station" or "no link station" message for all given points
 * function can also be used to print for each point.
 * for example to print message for x: 0, y: 0 , pass [0, 0] as "locationPoints" argument to --> getRootSeponse([0, 0])
 */
const getRootResponse = (
  locationPoints?: number[][],
  linkStationInfoData?: LinkStationInfo[]
): string => {
  let response = ''
  const deviceLocations = getDeviceLocations(locationPoints)
  deviceLocations.forEach((deviceLocation, index) => {
    const bestLinkStation = getLinkStationWithMostPower(
      deviceLocation,
      linkStationInfoData
    )
    console.log('start building response based on best link station')
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
  console.log(
    'returning response (surrounded in <p></p> to allow for formatting):',
    "'" + response + "'"
  )
  return '<p>' + response + '</p>'
}

export { getRootResponse }

import { linkStationInfos } from '../data/linkStations'
import {
  DeviceLocation,
  LinkStationInfo,
  LinkStationInfoWithPower
} from '../types/linkStations'
import { getDistanceBetweenPoints } from './math'

/**
 * A link station’s power can be calculated:
 * power = (reach - device's distance from linkstation)^2
 * if distance > reach, power = 0
 * */
const getLinkStationPower = (
  linkStationInfo: LinkStationInfo,
  deviceLocation: DeviceLocation
) => {
  const { x, y, reach } = linkStationInfo
  const { deviceX, deviceY } = deviceLocation
  const distance = getDistanceBetweenPoints(x, y, deviceX, deviceY)
  const power = distance > reach ? 0 : Math.pow(reach - distance, 2)
  console.log('linkStationInfo', JSON.stringify(linkStationInfo))
  console.log('distance:', distance, 'reach:', reach, 'power:', power)
  return power
}

const getLinkStationWithMostPower = (
  deviceLocation: DeviceLocation
): LinkStationInfoWithPower | undefined => {
  console.log('deviceLocation:', JSON.stringify(deviceLocation))
  let linkStationWithMostPower = undefined

  let linkStationsWithAnyPower: LinkStationInfoWithPower[] = []
  linkStationInfos.forEach((linkStationInfo) => {
    const power = getLinkStationPower(linkStationInfo, deviceLocation)
    if (power > 0) {
      linkStationsWithAnyPower = [
        ...linkStationsWithAnyPower,
        {
          ...linkStationInfo,
          power
        }
      ]
    }
  })

  if (linkStationsWithAnyPower.length > 0) {
    const sortedLinkStationPowers = linkStationsWithAnyPower.sort(
      ({ power: powerA }, { power: powerB }) => powerB - powerA
    )
    console.log(
      'sortedLinkStationPowers:',
      JSON.stringify(sortedLinkStationPowers)
    )
    const highestPowerLinkStation = sortedLinkStationPowers[0]
    linkStationWithMostPower =
      highestPowerLinkStation.power !== 0 ? highestPowerLinkStation : undefined
  }
  console.log('linkStationWithMostPower:', linkStationWithMostPower)
  return linkStationWithMostPower
}

export { getLinkStationWithMostPower }

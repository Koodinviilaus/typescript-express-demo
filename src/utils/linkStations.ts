/* eslint-disable no-console */
import { getLinkStationInfos } from '../data/linkStations'
import {
  DeviceLocation,
  LinkStationInfo,
  LinkStationInfoWithPower
} from '../types/linkStations'
import { getDistanceBetweenPoints, roundToTwoDecimals } from './math'

/**
 * A link station’s power can be calculated:
 * power = (reach - device's distance from linkstation)^2
 * if distance > reach, power = 0
 * */
const getLinkStationPower = (
  linkStationInfo: LinkStationInfo,
  deviceLocation: DeviceLocation
): number => {
  console.log(
    'Start getting link station power for linkStation',
    JSON.stringify(linkStationInfo)
  )
  const { x, y, reach } = linkStationInfo
  const { deviceX, deviceY } = deviceLocation
  const distance = getDistanceBetweenPoints(x, y, deviceX, deviceY)
  const power = distance > reach ? 0 : Math.pow(reach - distance, 2)
  const powerRoundedToTwo = roundToTwoDecimals(power)

  console.log(
    'Link station power calculated, full info:',
    'distance:',
    distance,
    'reach:',
    reach,
    'power:',
    powerRoundedToTwo
  )
  return powerRoundedToTwo
}

const getLinkStationWithMostPower = (
  deviceLocation: DeviceLocation,
  linkStationInfoData?: LinkStationInfo[]
): LinkStationInfoWithPower | undefined => {
  console.log(
    'Starting to find best link station for deviceLocation:',
    JSON.stringify(deviceLocation)
  )
  let linkStationWithMostPower = undefined

  let linkStationsWithAnyPower: LinkStationInfoWithPower[] = []
  const linkStationInfos = getLinkStationInfos(linkStationInfoData)
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
      'Link station powers sorted:',
      JSON.stringify(sortedLinkStationPowers)
    )
    const highestPowerLinkStation = sortedLinkStationPowers[0]
    linkStationWithMostPower =
      highestPowerLinkStation.power !== 0 ? highestPowerLinkStation : undefined
  }
  console.log(
    'Finished looking for linkStation with most power',
    'linkStationWithMostPower:',
    linkStationWithMostPower,
    'for point:',
    deviceLocation
  )
  return linkStationWithMostPower
}

export { getLinkStationPower, getLinkStationWithMostPower }

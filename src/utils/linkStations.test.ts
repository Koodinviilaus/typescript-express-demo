import {
  getLinkStationPower,
  getLinkStationWithMostPower
} from './linkStations'
import { DeviceLocation, LinkStationInfo } from '../types/linkStations'

// power is reach-distance to the power of two, or Math.pow(reach - distance, 2) rounded to two decimal points
describe('Get link station power at device location', () => {
  describe('for device in (x: 0, y: 0)', () => {
    const deviceLocation: DeviceLocation = { deviceX: 0, deviceY: 0 }
    test('x:0, y:0, reach: 0 --> power: 0', async () => {
      const linkStationInfo: LinkStationInfo = { x: 0, y: 0, reach: 0 }
      const linkStationPower = getLinkStationPower(
        linkStationInfo,
        deviceLocation
      )
      expect(linkStationPower).toStrictEqual(0)
    })
    test('x:0, y:0, reach: 2 --> power: 4', async () => {
      const linkStationInfo: LinkStationInfo = { x: 0, y: 0, reach: 2 }
      const linkStationPower = getLinkStationPower(
        linkStationInfo,
        deviceLocation
      )
      expect(linkStationPower).toStrictEqual(4)
    })
    test('x: 1, y: 1, reach: 2 (distance = 1.41) --> power: 0.35', async () => {
      const linkStationInfo: LinkStationInfo = { x: 1, y: 1, reach: 2 }
      const linkStationPower = getLinkStationPower(
        linkStationInfo,
        deviceLocation
      )
      expect(linkStationPower).toStrictEqual(0.35)
    })
    test('x: 2, y: 2, reach: 2 --> distance is more than reach so  power: 0', async () => {
      const linkStationInfo: LinkStationInfo = { x: 2, y: 2, reach: 2 }
      const linkStationPower = getLinkStationPower(
        linkStationInfo,
        deviceLocation
      )
      expect(linkStationPower).toStrictEqual(0)
    })
  })
})

describe('Get link station with most power at device location', () => {
  describe('for device in (x: 0, y: 0)', () => {
    const deviceLocation: DeviceLocation = { deviceX: 0, deviceY: 0 }
    test('no best linkStation', async () => {
      const mockLinkStations = [
        { x: 0, y: 0, reach: 0 },
        { x: 100, y: 100, reach: 50 }
      ]
      const linkStationWithMostPower = getLinkStationWithMostPower(
        deviceLocation,
        mockLinkStations
      )
      expect(linkStationWithMostPower).toStrictEqual(undefined)
    })
    test('with most reach wins', async () => {
      const lessReachStation = { x: 0, y: 0, reach: 10 }
      const middleReachStation = { x: 0, y: 0, reach: 15 }
      const moreReachStation = { x: 0, y: 0, reach: 20 }
      const mockLinkStations = [
        lessReachStation,
        middleReachStation,
        moreReachStation
      ]
      const linkStationWithMostPower = getLinkStationWithMostPower(
        deviceLocation,
        mockLinkStations
      )
      expect(linkStationWithMostPower.x).toStrictEqual(moreReachStation.x)
      expect(linkStationWithMostPower.y).toStrictEqual(moreReachStation.y)
      expect(linkStationWithMostPower.reach).toStrictEqual(
        moreReachStation.reach
      )
    })
  })
})

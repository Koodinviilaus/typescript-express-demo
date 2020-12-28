import { getDeviceLocations } from '../data/devices'
import {
  getBestLinkStationMessage,
  getNoLinkStationMessage
} from '../utils/messages'
import { getRootResponse } from './root'
import { LinkStationInfo } from '../types/linkStations'
import { getLinkStationPower } from '../utils/linkStations'

const wrapResponseInPTag = (response: string) => `<p>${response}</p>`

describe('Root response for devices should be based on correct info', () => {
  describe('for device in (x: 0, y: 0)', () => {
    const deviceLocationData: number[][] = [[0, 0]]
    const deviceLocations = getDeviceLocations(deviceLocationData)
    test('no best linkStation message', async () => {
      const mockLinkStationsWithoutReach = [{ x: 0, y: 0, reach: 0 }]
      const rootResponse = getRootResponse(
        deviceLocationData,
        mockLinkStationsWithoutReach
      )
      const noBestMessage = getNoLinkStationMessage(deviceLocations[0])
      const responseWrappedInPTag = wrapResponseInPTag(noBestMessage)
      expect(rootResponse).toStrictEqual(responseWrappedInPTag)
      expect(rootResponse).toStrictEqual(
        '<p>No link station within reach for point 0, 0.</p>'
      )
    })
    test('best found message', async () => {
      const linkStationWithReach: LinkStationInfo = { x: 0, y: 0, reach: 10 }
      const rootResponse = getRootResponse(deviceLocationData, [
        linkStationWithReach
      ])
      const linkStationWithPower = {
        ...linkStationWithReach,
        power: getLinkStationPower(linkStationWithReach, deviceLocations[0])
      }
      const bestMessage = getBestLinkStationMessage(
        linkStationWithPower,
        deviceLocations[0]
      )
      const responseWrappedInPTag = wrapResponseInPTag(bestMessage)
      expect(rootResponse).toStrictEqual(responseWrappedInPTag)
      expect(rootResponse).toStrictEqual(
        '<p>Best link station for point 0, 0 is 0, 0 with power 100.</p>'
      )
    })
  })
})

import { LinkStationInfo } from '../types/linkStations'

const getLinkStationInfos = (
  linkStationInfos?: LinkStationInfo[]
): LinkStationInfo[] =>
  linkStationInfos || [
    { x: 2, y: 0, reach: 10 },
    { x: 10, y: 0, reach: 12 },
    { x: 20, y: 20, reach: 5 }
  ]

export { getLinkStationInfos }

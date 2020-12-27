export interface DeviceLocation {
  deviceX: number
  deviceY: number
}

export interface LinkStationInfo {
  x: number
  y: number
  /** the distance link station can connect to */
  reach: number
}

export interface LinkStationInfoWithPower extends LinkStationInfo {
  power: number
}

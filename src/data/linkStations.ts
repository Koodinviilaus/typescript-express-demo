interface LinkStationLocations {
  [key: number]: [x: number, y: number, power: number]
}

const linkStationsLocations: LinkStationLocations = {
  0: [2, 0, 10],
  1: [10, 0, 12],
  2: [20, 20, 5],
}

export { LinkStationLocations, linkStationsLocations }

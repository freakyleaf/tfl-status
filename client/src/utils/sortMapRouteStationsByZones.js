const sortStationsByZone = (stations) => {
  let counter = 0;
  let currentZone = stations[0].zone.zones;

  const stationsByZone = [
    {
      zone: {},
      stations: [],
    },
  ];

  stations.forEach((station) => {
    if (station.zone.zones !== currentZone) {
      counter++;
      currentZone = station.zone.zones;
      stationsByZone[counter] = {
        zone: {},
        stations: [],
      };
    }
    stationsByZone[counter].stations.push(station);
    stationsByZone[counter].zone = station.zone;
  });

  return stationsByZone;
};

const sortMapRouteStationsByZones = (maps) => {
  return maps.map((map) => {
    return {
      ...map,
      zones: sortStationsByZone(map.stations),
    };
  });
};

export default sortMapRouteStationsByZones;

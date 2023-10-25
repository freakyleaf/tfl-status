import serviceGroups, { SERVICE_GROUP_BUS, SERVICE_GROUP_CORE } from '../constants/serviceGroups.js';
import { SERVICE_MODE_CABLE_CAR } from '../constants/serviceModes.js';

import getStatus from './getStatus.js';
import sortLinesBus from './sortLinesBus.js';
import sortLinesCore from './sortLinesCore.js';
import stringToKebabCase from './stringToKebabCase.js';

const cleanName = (name) => {
  return name
    .replace(' (Bakerloo)', '')
    .replace(' (Circle Line)', '')
    .replace(' (Dist&Picc Line)', '')
    .replace(' (H&C Line)', '')
    .replace(' Airport', '')
    .replace(' DLR Station', '')
    .replace(' ELL', '')
    .replace(' Rail Station', '')
    .replace(' Tram Stop', '')
    .replace(' Underground Station', '')
    .replace('-Underground', '')
    .replace('&harr;', 'to')
    .replace('London Euston', 'Euston')
    .replace('London Gatwick', 'Gatwick Airport')
    .replace('London Liverpool Street', 'Liverpool Street')
    .replace('London Paddington', 'Paddington')
    .replace('Stn', 'Station')
    .replaceAll(' (London)', '')
    .replaceAll('  ', ' ')
    .trim();
};

const sortLines = ({ group, lines }) => {
  if (group === SERVICE_GROUP_BUS) return sortLinesBus(lines);
  if (group === SERVICE_GROUP_CORE) return sortLinesCore(lines);
  return lines;
};

const getInterchanges = ({ id, modesById, lines }) => {
  const output = [];

  serviceGroups.forEach((serviceGroup) => {
    const linesFiltered = lines
      .filter((line) => line.id !== id) // We don't want to include the current line
      .filter((line) => line.id !== SERVICE_MODE_CABLE_CAR) // We don't currently support the cable car
      .filter((line) => serviceGroup.modes.includes(modesById.find((mode) => mode.id === line.id).mode));

    if (linesFiltered.length > 0) {

      const linesSorted = sortLines({ group: serviceGroup.group, lines: linesFiltered });

      output.push({
        group: serviceGroup.group,
        lines: linesSorted.map((line) => {
          const mode = modesById.find((mode) => mode.id === line.id).mode;

          return {
            id: line.id,
            mode,
            name: line.name,
          };
        }),
        path: serviceGroup.path,
      });
    }
  });

  return output;
};

const getModesById = async() => {
  const data = await getStatus();

  return data.map((datum) => {
    return {
      id: datum.id,
      mode: datum.modeName,
    };
  });
};

const createLine = async({ data, id }) => {
  const modesById = await getModesById();

  return data.orderedLineRoutes.map((orderedLineRoute) => {
    const name = cleanName(orderedLineRoute.name);

    return {
      id: stringToKebabCase(name),
      name,
      stations: orderedLineRoute.naptanIds.map((naptanId) => {
        // The `stationId` value in `data.stations` could either be the `naptanId` or the `topMostParentId` value in `data.stopPointSequences`
        const stopPointSequencesStation = data.stopPointSequences.flatMap((stopPointSequence) => stopPointSequence.stopPoint).find((stopPoint) => stopPoint.id === naptanId);
        const stationId = stopPointSequencesStation.topMostParentId || naptanId;
        const station = data.stations.find((station) => station.id === stationId);

        if (!station) console.error(`Station not found: ${stationId}`);

        const stationName = cleanName(station.name);

        return {
          hasDisruption: !!stopPointSequencesStation.hasDisruption,
          interchanges: getInterchanges({ id, modesById, lines: station.lines }),
          name: stationName,
          id: stringToKebabCase(stationName),
        };
      }),
    };
  });
};

export default createLine;

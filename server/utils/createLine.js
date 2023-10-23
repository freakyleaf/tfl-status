import {
  SERVICE_MODE_DLR,
  SERVICE_MODE_ELIZABETH_LINE,
  SERVICE_MODE_OVERGROUND,
  SERVICE_MODE_TRAM,
  SERVICE_MODE_TUBE,
} from '../constants/serviceModes.js';

import {
  coreServices,
  dlrServices,
  elizabethLineServices,
  overgroundServices,
  tramServices,
  tubeServices,
} from '../constants/services.js';

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
    .replace('London Liverpool Street', 'Liverpool Street')
    .replace('London Paddington', 'Paddington')
    .replaceAll(' (London)', '')
    .replaceAll('  ', ' ')
    .trim();
};

const getInterchanges = (lines, id) => {
  const linesFiltered = lines
    .filter((line) => coreServices.includes(line.id)) // We don't want to include bus routes
    .filter((line) => line.id !== id) // We don't want to include the current line
    .map((line) => {
      return {
        id: line.id,
        mode: getMode(line.id),
        name: line.name,
      };
    });

  const linesSorted = linesFiltered.sort((a, b) => {
    const indexA = coreServices.findIndex((coreService) => a.id === coreService);
    const indexB = coreServices.findIndex((coreService) => b.id === coreService);
    return indexA - indexB;
  });

  return linesSorted;
};

const getMode = (id) => {
  if (dlrServices.includes(id)) return SERVICE_MODE_DLR;
  if (elizabethLineServices.includes(id)) return SERVICE_MODE_ELIZABETH_LINE;
  if (overgroundServices.includes(id)) return SERVICE_MODE_OVERGROUND;
  if (tramServices.includes(id)) return SERVICE_MODE_TRAM;
  if (tubeServices.includes(id)) return SERVICE_MODE_TUBE;
};

const createLine = (data, id) => {
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

        return {
          hasDisruption: !!stopPointSequencesStation.hasDisruption,
          hasNationalRailInterchange: station.modes.includes('national-rail'),
          interchanges: getInterchanges(station.lines, id),
          name: cleanName(station.name),
        };
      }),
    };
  });
};

export default createLine;

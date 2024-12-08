import cleanName from './cleanName.js';
import fixOrderedLineRoutes from './fixOrderedLineRoutes.js';
import getInterchanges from './getInterchanges.js';
import getModesById from './getModesById.js';
import getStationAccessibility from './getStationAccessibility.js';
import getStationEmbellishments from './getStationEmbellishments.js';
import getZone from './getZone.js';
import stringToKebabCase from './stringToKebabCase.js';

import {
  SERVICE_ID_CIRCLE,
} from '../constants/serviceIds.js';

const interchangesEmbellishments = ({ id, stationEmbellishments }) => {
  if (!stationEmbellishments?.interchanges) return null;
  return stationEmbellishments.interchanges.map((interchange) => {
    return {
      group: interchange.group,
      lines: interchange.lines.filter((line) => !line.ignoreLineIds?.includes(id)),
    };
  });
};

const createMaps = async({ data, id }) => {
  const {
    mode,
    orderedLineRoutes: orderedLineRoutesRaw,
    stations: stationsRaw,
    stopPointSequences,
  } = data;
  const modesById = await getModesById();
  const orderedLineRoutes = fixOrderedLineRoutes({ orderedLineRoutesRaw });

  return orderedLineRoutes.map((orderedLineRoute) => {
    const name = cleanName(orderedLineRoute.name);
    const stations = [];
    const stationIds = []; // Array used to track unique values as we don't want duplicate stations (apart from Edgware Road and Paddington on the Circle line)

    orderedLineRoute.naptanIds.forEach((naptanId) => {
      // The `stationId` value in `data.stations` could either be the `naptanId` or the `topMostParentId` value in `data.stopPointSequences`
      const stopPointSequencesStation = stopPointSequences.flatMap((stopPointSequence) => stopPointSequence.stopPoint).find((stopPoint) => stopPoint.id === naptanId);
      const topMostParentId = stopPointSequencesStation.topMostParentId;
      const stationId = topMostParentId || naptanId;
      const station = stationsRaw.find((station) => station.id === stationId);

      if (!station) console.error(`Station not found: ${stationId}`);

      const stationEmbellishments = getStationEmbellishments({ topMostParentId });
      const stationName = cleanName(station.name);

      if (!stationIds.includes(stationId) || (id === SERVICE_ID_CIRCLE && (stationName === 'Edgware Road' || stationName === 'Paddington'))) {
        stations.push({
          accessibility: getStationAccessibility({ id, naptanId, topMostParentId }),
          embellishments: stationEmbellishments,
          hasBulletins: stopPointSequencesStation.hasDisruption,
          id: stringToKebabCase(stationName),
          interchanges: getInterchanges({
            embellishments: interchangesEmbellishments({ id, stationEmbellishments }),
            id,
            lines: station.lines,
            modesById,
          }),
          name: stationName,
          naptanId,
          topMostParentId,
          zone: getZone({
            id,
            mode,
            naptanId,
            zone: station.zone,
          }),
        });
      }
      stationIds.push(stationId);
    });

    return {
      id: stringToKebabCase(name),
      name,
      stations,
    };
  });
};

export default createMaps;

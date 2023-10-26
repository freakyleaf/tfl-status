import cleanName from './cleanName.js';
import getInterchanges from './getInterchanges.js';
import getModesById from './getModesById.js';

import stringToKebabCase from './stringToKebabCase.js';

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
          interchanges: getInterchanges({ id, lines: station.lines, modesById }),
          name: stationName,
          naptanId,
          id: stringToKebabCase(stationName),
        };
      }),
    };
  });
};

export default createLine;

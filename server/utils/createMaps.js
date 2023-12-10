import cleanName from './cleanName.js';
import getInterchanges from './getInterchanges.js';
import getModesById from './getModesById.js';
import getStationAccessibility from './getStationAccessibility.js';
import getStationEmbellishments from './getStationEmbellishments.js';
import getZone from './getZone.js';
import stringToKebabCase from './stringToKebabCase.js';

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
    orderedLineRoutes,
    stations,
    stopPointSequences,
  } = data;
  const modesById = await getModesById();

  return orderedLineRoutes.map((orderedLineRoute) => {
    const name = cleanName(orderedLineRoute.name);

    return {
      id: stringToKebabCase(name),
      name,
      stations: orderedLineRoute.naptanIds.map((naptanId) => {
        // The `stationId` value in `data.stations` could either be the `naptanId` or the `topMostParentId` value in `data.stopPointSequences`
        const stopPointSequencesStation = stopPointSequences.flatMap((stopPointSequence) => stopPointSequence.stopPoint).find((stopPoint) => stopPoint.id === naptanId);
        const topMostParentId = stopPointSequencesStation.topMostParentId;
        const stationId = topMostParentId || naptanId;
        const station = stations.find((station) => station.id === stationId);

        if (!station) console.error(`Station not found: ${stationId}`);

        const stationEmbellishments = getStationEmbellishments({ topMostParentId });
        const stationName = cleanName(station.name);

        return {
          accessibility: getStationAccessibility({ id, naptanId, topMostParentId }),
          embellishments: stationEmbellishments,
          hasDisruptions: !!stopPointSequencesStation.hasDisruption,
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
        };
      }),
    };
  });
};

export default createMaps;

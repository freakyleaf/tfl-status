import serviceGroups, { SERVICE_GROUP_BUS, SERVICE_GROUP_CORE } from '../constants/serviceGroups.js';
import {
  SERVICE_ID_CABLE_CAR,
  SERVICE_ID_THAMES_RIVER_SERVICES,
} from '../constants/serviceIds.js';

import sortLinesBus from './sortLinesBus.js';
import sortLinesCore from './sortLinesCore.js';

const sortLines = ({ group, lines }) => {
  if (group === SERVICE_GROUP_BUS) return sortLinesBus(lines);
  if (group === SERVICE_GROUP_CORE) return sortLinesCore(lines);
  return lines;
};

const getInterchanges = ({
  embellishments,
  id = null,
  lines,
  modesById,
}) => {
  const output = [];

  serviceGroups.forEach((serviceGroup) => {
    const linesFiltered = lines
      .filter((line) => line.id !== id) // We don't want to include the current line
      .filter((line) => line.id !== SERVICE_ID_CABLE_CAR) // We don't currently support the cable car
      .filter((line) => line.id !== SERVICE_ID_THAMES_RIVER_SERVICES) // `SERVICE_ID_THAMES_RIVER_SERVICES` doesn't include any meaningful data
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

  if (embellishments) {
    embellishments.forEach((embellishment) => {
      embellishment.isEmbellishment = true;
      output.push(embellishment);
    });
  }

  return output;
};

export default getInterchanges;

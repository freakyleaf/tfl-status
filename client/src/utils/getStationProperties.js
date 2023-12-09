import {
  ACCESSIBLE_PLATFORM,
  ACCESSIBLE_TRAIN,
} from '@constants/accessibility';

import {
  SERVICE_GROUP_BUS,
  SERVICE_GROUP_EXTRA,
  SERVICE_GROUP_NATIONAL_RAIL,
  SERVICE_GROUP_RIVER_BUS,
} from '@constants/serviceGroups';

const stationHasBusInterchange = (station) => {
  return station.interchanges.some((interchange) => interchange.group === SERVICE_GROUP_BUS);
};

const stationHasEmbellishmentInterchange = (station, serviceMode) => {
  if (serviceMode === SERVICE_GROUP_RIVER_BUS) {
    return station.embellishments?.interchanges?.some((interchange) => interchange.group === SERVICE_GROUP_RIVER_BUS);
  }
  const serviceGroupExtra = station.embellishments?.interchanges?.find((interchange) => interchange.group === SERVICE_GROUP_EXTRA);
  if (!serviceGroupExtra) return false;
  return serviceGroupExtra.lines.some((line) => line.mode === serviceMode);
};

const stationHasNationalRailInterchange = (station) => {
  // `!interchange.isEmbellishment` prevents stations from incorrectly showing a National Rail interchange
  return station.interchanges.some((interchange) => interchange.group === SERVICE_GROUP_NATIONAL_RAIL && !interchange.isEmbellishment);
};

const stationIsAccessible = (station) => {
  return stationIsAccessiblePlatform(station) || stationIsAccessibleTrain(station);
};

const stationIsAccessiblePlatform = (station) => {
  return station.accessibility === ACCESSIBLE_PLATFORM;
};

const stationIsAccessibleTrain = (station) => {
  return station.accessibility === ACCESSIBLE_TRAIN;
};

export {
  stationHasBusInterchange,
  stationHasEmbellishmentInterchange,
  stationHasNationalRailInterchange,
  stationIsAccessible,
};

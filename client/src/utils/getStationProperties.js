import {
  ACCESSIBLE_PLATFORM,
  ACCESSIBLE_TRAIN,
} from '@constants/accessibility';

import {
  EMBELLISHMENT_AIRPORT,
  EMBELLISHMENT_COACH,
  EMBELLISHMENT_EUROSTAR,
  EMBELLISHMENT_RIVER,
} from '@constants/embellishments';

import {
  SERVICE_GROUP_NATIONAL_RAIL,
} from '@constants/serviceGroups';

const stationHasEmbellishmentAirport = (station) => {
  return station.embellishments?.includes(EMBELLISHMENT_AIRPORT);
};

const stationHasEmbellishmentCoach = (station) => {
  return station.embellishments?.includes(EMBELLISHMENT_COACH);
};

const stationHasEmbellishmentEurostar = (station) => {
  return station.embellishments?.includes(EMBELLISHMENT_EUROSTAR);
};

const stationHasEmbellishmentRiver = (station) => {
  return station.embellishments?.includes(EMBELLISHMENT_RIVER);
};

const stationHasNationalRailInterchange = (station) => {
  return station.interchanges.some((interchange) => interchange.group === SERVICE_GROUP_NATIONAL_RAIL);
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
  stationHasEmbellishmentAirport,
  stationHasEmbellishmentCoach,
  stationHasEmbellishmentEurostar,
  stationHasEmbellishmentRiver,
  stationHasNationalRailInterchange,
  stationIsAccessible,
};

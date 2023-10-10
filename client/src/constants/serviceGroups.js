import {
  PATH_BUS,
  PATH_CORE,
  PATH_NATIONAL_RAIL,
} from '@constants/paths';

const SERVICE_GROUP_BUS = 'bus';
const SERVICE_GROUP_CORE = 'core';
const SERVICE_GROUP_NATIONAL_RAIL = 'nationalRail';

const SERVICE_MODE_BUS = 'bus';
const SERVICE_MODE_DLR = 'dlr';
const SERVICE_MODE_ELIZABETH_LINE = 'elizabeth-line';
const SERVICE_MODE_NATIONAL_RAIL = 'national-rail';
const SERVICE_MODE_OVERGROUND = 'overground';
const SERVICE_MODE_TRAM = 'tram';
const SERVICE_MODE_TUBE = 'tube';

const SERVICE_NAME_PRETTY_BUS = 'Bus';
const SERVICE_NAME_PRETTY_CORE = 'Core';
const SERVICE_NAME_PRETTY_NATIONAL_RAIL = 'National Rail';

const serviceGroups = {
  [SERVICE_GROUP_BUS]: {
    modes: [
      SERVICE_MODE_BUS,
    ],
    namePretty: SERVICE_NAME_PRETTY_BUS,
    path: `/${PATH_BUS}`,
  },
  [SERVICE_GROUP_CORE]: {
    modes: [
      SERVICE_MODE_TUBE,
      SERVICE_MODE_OVERGROUND,
      SERVICE_MODE_ELIZABETH_LINE,
      SERVICE_MODE_DLR,
      SERVICE_MODE_TRAM,
    ],
    namePretty: SERVICE_NAME_PRETTY_CORE,
    path: PATH_CORE,
  },
  [SERVICE_GROUP_NATIONAL_RAIL]: {
    modes: [
      SERVICE_MODE_NATIONAL_RAIL,
    ],
    namePretty: SERVICE_NAME_PRETTY_NATIONAL_RAIL,
    path: `/${PATH_NATIONAL_RAIL}`,
  },
};

export {
  SERVICE_GROUP_BUS,
  SERVICE_GROUP_CORE,
  SERVICE_GROUP_NATIONAL_RAIL,
  SERVICE_NAME_PRETTY_BUS,
  SERVICE_NAME_PRETTY_CORE,
  SERVICE_NAME_PRETTY_NATIONAL_RAIL,
};

export default serviceGroups;

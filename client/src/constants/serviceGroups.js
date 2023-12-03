import {
  PATH_BUS,
  PATH_CORE,
  PATH_NATIONAL_RAIL,
  PATH_RIVER_BUS,
} from '@constants/paths';

import {
  SERVICE_MODE_BUS,
  SERVICE_MODE_DLR,
  SERVICE_MODE_ELIZABETH_LINE,
  SERVICE_MODE_NATIONAL_RAIL,
  SERVICE_MODE_OVERGROUND,
  SERVICE_MODE_RIVER_BUS,
  SERVICE_MODE_TRAM,
  SERVICE_MODE_TUBE,
} from '@constants/serviceModes';

import {
  SERVICE_NAME_BUS,
  SERVICE_NAME_CORE,
  SERVICE_NAME_NATIONAL_RAIL,
  SERVICE_NAME_RIVER_BUS,
} from '@constants/serviceNames';

const SERVICE_GROUP_BUS = 'bus';
const SERVICE_GROUP_CORE = 'core';
const SERVICE_GROUP_EXTRA = 'extra';
const SERVICE_GROUP_NATIONAL_RAIL = 'national-rail';
const SERVICE_GROUP_RIVER_BUS = 'river-bus';

// Ordered as they need to appear (core, bus, national rail, river bus)
const serviceGroups = [
  {
    group: SERVICE_GROUP_CORE,
    modes: [
      SERVICE_MODE_TUBE,
      SERVICE_MODE_OVERGROUND,
      SERVICE_MODE_ELIZABETH_LINE,
      SERVICE_MODE_DLR,
      SERVICE_MODE_TRAM,
    ],
    name: SERVICE_NAME_CORE,
    path: PATH_CORE,
  },
  {
    group: SERVICE_GROUP_BUS,
    modes: [
      SERVICE_MODE_BUS,
    ],
    name: SERVICE_NAME_BUS,
    path: `/${PATH_BUS}`,
  },
  {
    group: SERVICE_GROUP_NATIONAL_RAIL,
    modes: [
      SERVICE_MODE_NATIONAL_RAIL,
    ],
    name: SERVICE_NAME_NATIONAL_RAIL,
    path: `/${PATH_NATIONAL_RAIL}`,
  },
  {
    group: SERVICE_GROUP_RIVER_BUS,
    modes: [
      SERVICE_MODE_RIVER_BUS,
    ],
    name: SERVICE_NAME_RIVER_BUS,
    path: `/${PATH_RIVER_BUS}`,
  },
];

export {
  SERVICE_GROUP_BUS,
  SERVICE_GROUP_CORE,
  SERVICE_GROUP_EXTRA,
  SERVICE_GROUP_NATIONAL_RAIL,
  SERVICE_GROUP_RIVER_BUS,
  SERVICE_NAME_BUS,
  SERVICE_NAME_CORE,
  SERVICE_NAME_NATIONAL_RAIL,
  SERVICE_NAME_RIVER_BUS,
};

export default serviceGroups;

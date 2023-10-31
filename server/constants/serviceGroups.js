import {
  SERVICE_MODE_BUS,
  SERVICE_MODE_DLR,
  SERVICE_MODE_ELIZABETH_LINE,
  SERVICE_MODE_NATIONAL_RAIL,
  SERVICE_MODE_OVERGROUND,
  SERVICE_MODE_TRAM,
  SERVICE_MODE_TUBE,
} from './serviceModes.js';

const SERVICE_GROUP_ALL = 'all';
const SERVICE_GROUP_BUS = 'bus';
const SERVICE_GROUP_CORE = 'core';
const SERVICE_GROUP_NATIONAL_RAIL = 'national-rail';

// Ordered as they need to appear (core, bus, national rail)
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
  },
  {
    group: SERVICE_GROUP_BUS,
    modes: [
      SERVICE_MODE_BUS,
    ],
  },
  {
    group: SERVICE_GROUP_NATIONAL_RAIL,
    modes: [
      SERVICE_MODE_NATIONAL_RAIL,
    ],
  },
];

export default serviceGroups;

export {
  SERVICE_GROUP_ALL,
  SERVICE_GROUP_BUS,
  SERVICE_GROUP_CORE,
  SERVICE_GROUP_NATIONAL_RAIL,
};

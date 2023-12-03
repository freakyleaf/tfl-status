import {
  SERVICE_GROUP_ALL,
  SERVICE_GROUP_BUS,
  SERVICE_GROUP_CORE,
  SERVICE_GROUP_NATIONAL_RAIL,
  SERVICE_GROUP_RIVER_BUS,
} from '../constants/serviceGroups.js';

import {
  SERVICE_ID_THAMES_RIVER_SERVICES,
} from '../constants/serviceIds.js';

import sortLinesBus from './sortLinesBus.js';

const sortServices = ({ group, serviceModes, services }) => {
  const output = {};

  if (group === SERVICE_GROUP_ALL || group === SERVICE_GROUP_BUS) {
    output[SERVICE_GROUP_BUS] = sortLinesBus(services);
  }

  if (group === SERVICE_GROUP_ALL || group === SERVICE_GROUP_CORE) {
    serviceModes.forEach((serviceMode) => {
      output[serviceMode] = services.filter((service) => service.mode === serviceMode);
    });
  }

  if (group === SERVICE_GROUP_ALL) {
    output[SERVICE_GROUP_NATIONAL_RAIL] = services.filter((service) => service.mode === SERVICE_GROUP_NATIONAL_RAIL);
  }

  if (group === SERVICE_GROUP_NATIONAL_RAIL) {
    output[SERVICE_GROUP_NATIONAL_RAIL] = services;
  }

  if (group === SERVICE_GROUP_ALL || group === SERVICE_GROUP_RIVER_BUS) {
    // `SERVICE_ID_THAMES_RIVER_SERVICES` doesn't include any meaningful data
    output[SERVICE_GROUP_RIVER_BUS] = services.filter((service) => service.mode === SERVICE_GROUP_RIVER_BUS && service.id !== SERVICE_ID_THAMES_RIVER_SERVICES);
  }

  return output;
};

export default sortServices;

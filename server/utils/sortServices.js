import {
  SERVICE_GROUP_BUS,
  SERVICE_GROUP_CORE,
  SERVICE_GROUP_NATIONAL_RAIL,
} from '../constants/serviceGroups.js';

import sortLinesBus from './sortLinesBus.js';

const sortServices = ({ group, serviceModes, services }) => {
  const output = {};

  if (group === SERVICE_GROUP_BUS) {
    output[SERVICE_GROUP_BUS] = sortLinesBus(services);
  }

  if (group === SERVICE_GROUP_CORE) {
    serviceModes.forEach((serviceMode) => {
      output[serviceMode] = services.filter((service) => service.mode === serviceMode);
    });
  }

  if (group === SERVICE_GROUP_NATIONAL_RAIL) {
    output[SERVICE_GROUP_NATIONAL_RAIL] = services;
  }

  return output;
};

export default sortServices;

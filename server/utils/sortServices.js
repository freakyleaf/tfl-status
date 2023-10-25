import serviceModes, { SERVICE_MODE_BUS } from '../constants/serviceModes.js';

import sortLinesBus from './sortLinesBus.js';

const sortServcies = (services) => {
  const output = {};

  serviceModes.forEach((serviceMode) => {
    output[serviceMode] = services.filter((service) => service.mode === serviceMode);
  });

  output[SERVICE_MODE_BUS] = sortLinesBus(output[SERVICE_MODE_BUS]);

  return output;
};

export default sortServcies;

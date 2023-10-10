import serviceModes, { SERVICE_MODE_BUS } from '../constants/serviceModes.js';

const sortServcies = (services) => {
  const output = {};

  serviceModes.forEach((serviceMode) => {
    output[serviceMode] = services.filter((service) => service.mode === serviceMode);
  });

  output[SERVICE_MODE_BUS].sort((a, b) => {
    return a.id.localeCompare(b.id, 'en', {
      numeric: true,
      sensitivity: 'base',
    });
  });

  return output;
};

export default sortServcies;

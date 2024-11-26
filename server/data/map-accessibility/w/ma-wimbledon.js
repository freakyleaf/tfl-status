import {
  ACCESS_TYPE_TRAIN,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_DISTRICT,
  SERVICE_ID_TRAM,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: 'HUBWIM', // Wimbledon
  services: [
    {
      id: SERVICE_ID_DISTRICT,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUWIM',
    },
    {
      id: SERVICE_ID_TRAM,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZCRWMB',
    },
  ],
};

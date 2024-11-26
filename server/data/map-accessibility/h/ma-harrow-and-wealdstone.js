import {
  ACCESS_TYPE_PLATFORM,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_BAKERLOO,
  SERVICE_ID_LIONESS,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: 'HUBHRW', // Harrow & Wealdstone
  services: [
    {
      id: SERVICE_ID_BAKERLOO,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '940GZZLUHAW',
    },
    {
      id: SERVICE_ID_LIONESS,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '910GHROW',
    },
  ],
};

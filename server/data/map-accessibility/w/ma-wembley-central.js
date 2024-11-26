import {
  ACCESS_TYPE_PLATFORM,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_BAKERLOO,
  SERVICE_ID_LIONESS,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: 'HUBWMB', // Wembley Central
  services: [
    {
      id: SERVICE_ID_BAKERLOO,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '940GZZLUWYC',
    },
    {
      id: SERVICE_ID_LIONESS,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '910GWMBY',
    },
  ],
};

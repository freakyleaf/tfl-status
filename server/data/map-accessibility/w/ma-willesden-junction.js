import {
  ACCESS_TYPE_PLATFORM,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_BAKERLOO,
  SERVICE_ID_LIONESS,
  SERVICE_ID_MILDMAY,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: 'HUBWIJ', // Willesden Junction
  services: [
    {
      id: SERVICE_ID_BAKERLOO,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '940GZZLUWJN',
    },
    {
      id: SERVICE_ID_LIONESS,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '910GWLSDJHL',
    },
    {
      id: SERVICE_ID_MILDMAY,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '910GWLSDJHL',
    },
  ],
};

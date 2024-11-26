import {
  ACCESS_TYPE_PLATFORM,
  ACCESS_TYPE_TRAIN,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_DISTRICT,
  SERVICE_ID_ELIZABETH,
  SERVICE_ID_HAMMERSMITH_CITY,
  SERVICE_ID_WINDRUSH,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: 'HUBZWL', // Whitechapel
  services: [
    {
      id: SERVICE_ID_DISTRICT,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '940GZZLUWPL',
    },
    {
      id: SERVICE_ID_HAMMERSMITH_CITY,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '940GZZLUWPL',
    },
    {
      id: SERVICE_ID_WINDRUSH,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '910GWCHAPEL',
    },
    {
      id: SERVICE_ID_ELIZABETH,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '910GWCHAPXR',
    },
  ],
};

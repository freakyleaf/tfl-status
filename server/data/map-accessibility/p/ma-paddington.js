import {
  ACCESS_TYPE_PLATFORM,
  ACCESS_TYPE_TRAIN,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_BAKERLOO,
  SERVICE_ID_CIRCLE,
  SERVICE_ID_ELIZABETH,
  SERVICE_ID_HAMMERSMITH_CITY,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: 'HUBPAD', // Paddington
  services: [
    {
      id: SERVICE_ID_BAKERLOO,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '940GZZLUPAC',
    },
    {
      id: SERVICE_ID_CIRCLE,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '940GZZLUPAH',
    },
    {
      id: SERVICE_ID_HAMMERSMITH_CITY,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '940GZZLUPAH',
    },
    {
      id: SERVICE_ID_ELIZABETH,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '910GPADTLL', // Deep level station
    },
    {
      id: SERVICE_ID_ELIZABETH,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '910GPADTON', // National Rail station
    },
  ],
};

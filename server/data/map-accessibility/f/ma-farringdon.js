import {
  ACCESS_TYPE_PLATFORM,
  ACCESS_TYPE_TRAIN,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_CIRCLE,
  SERVICE_ID_ELIZABETH,
  SERVICE_ID_HAMMERSMITH_CITY,
  SERVICE_ID_METROPOLITAN,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: 'HUBZFD', // Farringdon
  services: [
    {
      id: SERVICE_ID_CIRCLE,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '940GZZLUFCN',
    },
    {
      id: SERVICE_ID_HAMMERSMITH_CITY,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '940GZZLUFCN',
    },
    {
      id: SERVICE_ID_METROPOLITAN,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '940GZZLUFCN',
    },
    {
      id: SERVICE_ID_ELIZABETH,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '910GFRNDXR',
    },
  ],
};

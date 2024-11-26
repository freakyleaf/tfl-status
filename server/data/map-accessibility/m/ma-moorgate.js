import {
  ACCESS_TYPE_PLATFORM,
  ACCESS_TYPE_TRAIN,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_CIRCLE,
  SERVICE_ID_HAMMERSMITH_CITY,
  SERVICE_ID_METROPOLITAN,
  SERVICE_ID_NORTHERN,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: 'HUBZMG', // Moorgate
  services: [
    {
      id: SERVICE_ID_CIRCLE,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUMGT',
    },
    {
      id: SERVICE_ID_HAMMERSMITH_CITY,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUMGT',
    },
    {
      id: SERVICE_ID_METROPOLITAN,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUMGT',
    },
    {
      id: SERVICE_ID_NORTHERN,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '940GZZLUMGT',
    },
  ],
};

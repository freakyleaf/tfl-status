import {
  ACCESS_TYPE_PLATFORM,
  ACCESS_TYPE_TRAIN,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_DISTRICT,
  SERVICE_ID_HAMMERSMITH_CITY,
  SERVICE_ID_SUFFRAGETTE,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: 'HUBBKG', // Barking
  services: [
    {
      id: SERVICE_ID_DISTRICT,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUBKG',
    },
    {
      id: SERVICE_ID_HAMMERSMITH_CITY,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUBKG',
    },
    {
      id: SERVICE_ID_SUFFRAGETTE,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '910GBARKING',
    },
  ],
};

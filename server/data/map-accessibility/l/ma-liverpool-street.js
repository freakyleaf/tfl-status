import {
  ACCESS_TYPE_PLATFORM,
  ACCESS_TYPE_TRAIN,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_ELIZABETH,
  SERVICE_ID_WEAVER,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: 'HUBLST', // Liverpool Street
  services: [
    {
      id: SERVICE_ID_WEAVER,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '910GLIVST',
    },
    {
      id: SERVICE_ID_ELIZABETH,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '910GLIVSTLL', // Deep Level
    },
    {
      id: SERVICE_ID_ELIZABETH,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '910GLIVST', // National Rail
    },
  ],
};

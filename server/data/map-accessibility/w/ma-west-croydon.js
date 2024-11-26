import {
  ACCESS_TYPE_PLATFORM,
  ACCESS_TYPE_TRAIN,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_TRAM,
  SERVICE_ID_WINDRUSH,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: 'HUBWCY', // West Croydon
  services: [
    {
      id: SERVICE_ID_WINDRUSH,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '910GWCROYDN',
    },
    {
      id: SERVICE_ID_TRAM,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZCRWCR',
    },
  ],
};

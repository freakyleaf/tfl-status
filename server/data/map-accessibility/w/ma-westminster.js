import {
  ACCESS_TYPE_PLATFORM,
  ACCESS_TYPE_TRAIN,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_CIRCLE,
  SERVICE_ID_DISTRICT,
  SERVICE_ID_JUBILEE,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: 'HUBWSM', // Westminster
  services: [
    {
      id: SERVICE_ID_CIRCLE,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '940GZZLUWSM',
    },
    {
      id: SERVICE_ID_DISTRICT,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '940GZZLUWSM',
    },
    {
      id: SERVICE_ID_JUBILEE,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUWSM',
    },
  ],
};

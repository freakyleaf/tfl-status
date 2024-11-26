import {
  ACCESS_TYPE_TRAIN,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_DISTRICT,
  SERVICE_ID_DLR,
  SERVICE_ID_HAMMERSMITH_CITY,
  SERVICE_ID_JUBILEE,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: 'HUBWEH', // West Ham
  services: [
    {
      id: SERVICE_ID_DISTRICT,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUWHM',
    },
    {
      id: SERVICE_ID_HAMMERSMITH_CITY,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUWHM',
    },
    {
      id: SERVICE_ID_JUBILEE,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUWHM',
    },
    {
      id: SERVICE_ID_DLR,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZDLWHM',
    },
  ],
};

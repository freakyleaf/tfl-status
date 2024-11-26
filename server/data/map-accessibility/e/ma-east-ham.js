import {
  ACCESS_TYPE_TRAIN,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_DISTRICT,
  SERVICE_ID_HAMMERSMITH_CITY,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: '940GZZLUEHM', // East Ham
  services: [
    {
      id: SERVICE_ID_DISTRICT,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUEHM',
    },
    {
      id: SERVICE_ID_HAMMERSMITH_CITY,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUEHM',
    },
  ],
};

import {
  ACCESS_TYPE_TRAIN,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_DISTRICT,
  SERVICE_ID_PICCADILLY,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: '940GZZLUECT', // Earl's Court
  services: [
    {
      id: SERVICE_ID_DISTRICT,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUECT',
    },
    {
      id: SERVICE_ID_PICCADILLY,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUECT',
    },
  ],
};

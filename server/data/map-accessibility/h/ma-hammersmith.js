import {
  ACCESS_TYPE_TRAIN,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_CIRCLE,
  SERVICE_ID_DISTRICT,
  SERVICE_ID_HAMMERSMITH_CITY,
  SERVICE_ID_PICCADILLY,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: 'HUBHMS', // Hammersmith
  services: [
    {
      id: SERVICE_ID_CIRCLE,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUHSC',
    },
    {
      id: SERVICE_ID_DISTRICT,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUHSD',
    },
    {
      id: SERVICE_ID_HAMMERSMITH_CITY,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUHSC',
    },
    {
      id: SERVICE_ID_PICCADILLY,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUHSD',
    },
  ],
};

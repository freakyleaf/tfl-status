import {
  ACCESS_TYPE_TRAIN,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_JUBILEE,
  SERVICE_ID_WINDRUSH,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: 'HUBZCW', // Canada Water
  services: [
    {
      id: SERVICE_ID_JUBILEE,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUCWR',
    },
    {
      id: SERVICE_ID_WINDRUSH,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '910GCNDAW',
    },
  ],
};

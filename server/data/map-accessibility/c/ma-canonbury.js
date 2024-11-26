import {
  ACCESS_TYPE_PLATFORM,
  ACCESS_TYPE_TRAIN,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_MILDMAY,
  SERVICE_ID_WINDRUSH,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: '910GCNNB', // Canonbury
  services: [
    {
      id: SERVICE_ID_MILDMAY,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '910GCNNB',
    },
    {
      id: SERVICE_ID_WINDRUSH,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '910GCNNB',
    },
  ],
};

import {
  ACCESS_TYPE_PLATFORM,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_MILDMAY,
  SERVICE_ID_WINDRUSH,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: 'HUBCLJ', // Clapham Junction
  services: [
    {
      id: SERVICE_ID_MILDMAY,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '910GCLPHMJ1',
    },
    {
      id: SERVICE_ID_WINDRUSH,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '910GCLPHMJ1',
    },
  ],
};

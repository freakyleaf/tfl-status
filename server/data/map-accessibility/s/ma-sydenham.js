import {
  ACCESS_TYPE_PLATFORM,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_WINDRUSH,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: 'HUBSYD', // Sydenham
  services: [
    {
      id: SERVICE_ID_WINDRUSH,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '910GSYDENHM',
    },
  ],
};

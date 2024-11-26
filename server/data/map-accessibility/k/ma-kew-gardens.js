import {
  ACCESS_TYPE_PLATFORM,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_DISTRICT,
  SERVICE_ID_MILDMAY,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: 'HUBKWG', // Kew Gardens
  services: [
    {
      id: SERVICE_ID_DISTRICT,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '940GZZLUKWG',
    },
    {
      id: SERVICE_ID_MILDMAY,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '910GKEWGRDN',
    },
  ],
};

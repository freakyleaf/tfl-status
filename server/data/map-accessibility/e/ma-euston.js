import {
  ACCESS_TYPE_PLATFORM,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_LIONESS,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: 'HUBEUS', // Euston
  services: [
    {
      id: SERVICE_ID_LIONESS,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '910GEUSTON',
    },
  ],
};

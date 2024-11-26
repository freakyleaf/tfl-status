import {
  ACCESS_TYPE_PLATFORM,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_ELIZABETH,
  SERVICE_ID_LIBERTY,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: '910GROMFORD', // Romford
  services: [
    {
      id: SERVICE_ID_LIBERTY,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '910GROMFORD',
    },
    {
      id: SERVICE_ID_ELIZABETH,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '910GROMFORD',
    },
  ],
};

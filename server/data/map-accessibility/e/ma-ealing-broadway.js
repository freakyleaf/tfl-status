import {
  ACCESS_TYPE_PLATFORM,
  ACCESS_TYPE_TRAIN,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_CENTRAL,
  SERVICE_ID_DISTRICT,
  SERVICE_ID_ELIZABETH,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: 'HUBEAL', // Ealing Broadway
  services: [
    {
      id: SERVICE_ID_CENTRAL,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '940GZZLUEBY',
    },
    {
      id: SERVICE_ID_DISTRICT,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUEBY',
    },
    {
      id: SERVICE_ID_ELIZABETH,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '910GEALINGB',
    },
  ],
};

import {
  ACCESS_TYPE_PLATFORM,
  ACCESS_TYPE_TRAIN,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_ELIZABETH,
  SERVICE_ID_PICCADILLY,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: 'HUBHX5', // Heathrow Terminal 5
  services: [
    {
      id: SERVICE_ID_PICCADILLY,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '940GZZLUHR5',
    },
    {
      id: SERVICE_ID_ELIZABETH,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '910GHTRWTM5',
    },
  ],
};

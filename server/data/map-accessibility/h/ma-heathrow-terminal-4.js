import {
  ACCESS_TYPE_TRAIN,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_ELIZABETH,
  SERVICE_ID_PICCADILLY,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: 'HUBHX4', // Heathrow Terminal 4
  services: [
    {
      id: SERVICE_ID_PICCADILLY,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUHR4',
    },
    {
      id: SERVICE_ID_ELIZABETH,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '910GHTRWTM4',
    },
  ],
};

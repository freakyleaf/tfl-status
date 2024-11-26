import {
  ACCESS_TYPE_PLATFORM,
  ACCESS_TYPE_TRAIN,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_CENTRAL,
  SERVICE_ID_ELIZABETH,
  SERVICE_ID_NORTHERN,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: 'HUBTCR', // Tottenham Court Road
  services: [
    {
      id: SERVICE_ID_CENTRAL,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '940GZZLUTCR',
    },
    {
      id: SERVICE_ID_NORTHERN,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUTCR',
    },
    {
      id: SERVICE_ID_ELIZABETH,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '910GTOTCTRD',
    },
  ],
};

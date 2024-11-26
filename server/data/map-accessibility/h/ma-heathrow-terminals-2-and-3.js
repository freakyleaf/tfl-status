import {
  ACCESS_TYPE_TRAIN,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_ELIZABETH,
  SERVICE_ID_PICCADILLY,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: 'HUBH13', // Heathrow Terminals 2 & 3
  services: [
    {
      id: SERVICE_ID_PICCADILLY,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUHRC',
    },
    {
      id: SERVICE_ID_ELIZABETH,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '910GHTRWAPT',
    },
  ],
};

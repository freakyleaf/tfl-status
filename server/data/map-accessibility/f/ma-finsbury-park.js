import {
  ACCESS_TYPE_TRAIN,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_PICCADILLY,
  SERVICE_ID_VICTORIA,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: 'HUBFPK', // Finsbury Park
  services: [
    {
      id: SERVICE_ID_PICCADILLY,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUFPK',
    },
    {
      id: SERVICE_ID_VICTORIA,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUFPK',
    },
  ],
};

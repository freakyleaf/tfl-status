import {
  ACCESS_TYPE_TRAIN,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_CIRCLE,
  SERVICE_ID_DISTRICT,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: 'HUBBFR', // Blackfriars
  services: [
    {
      id: SERVICE_ID_CIRCLE,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUBKF',
    },
    {
      id: SERVICE_ID_DISTRICT,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUBKF',
    },
  ],
};

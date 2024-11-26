import {
  ACCESS_TYPE_PLATFORM,
  ACCESS_TYPE_TRAIN,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_CENTRAL,
  SERVICE_ID_ELIZABETH,
  SERVICE_ID_JUBILEE,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: 'HUBBDS', // Bond Street
  services: [
    {
      id: SERVICE_ID_CENTRAL,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '940GZZLUBND',
    },
    {
      id: SERVICE_ID_JUBILEE,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUBND',
    },
    {
      id: SERVICE_ID_ELIZABETH,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '910GBONDST',
    },
  ],
};

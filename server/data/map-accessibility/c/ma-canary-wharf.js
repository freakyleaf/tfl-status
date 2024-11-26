import {
  ACCESS_TYPE_TRAIN,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_DLR,
  SERVICE_ID_ELIZABETH,
  SERVICE_ID_JUBILEE,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: 'HUBCAW', // Canary Wharf
  services: [
    {
      id: SERVICE_ID_JUBILEE,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUCYF',
    },
    {
      id: SERVICE_ID_ELIZABETH,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '910GCANWHRF',
    },
    {
      id: SERVICE_ID_DLR,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZDLCAN',
    },
  ],
};

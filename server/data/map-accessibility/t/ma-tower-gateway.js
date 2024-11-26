import {
  ACCESS_TYPE_TRAIN,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_DLR,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: 'HUBTOG', // Tower Gateway
  services: [
    {
      id: SERVICE_ID_DLR,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZDLTWG',
    },
  ],
};

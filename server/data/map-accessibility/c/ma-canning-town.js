import {
  ACCESS_TYPE_TRAIN,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_DLR,
  SERVICE_ID_JUBILEE,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: 'HUBCAN', // Canning Town
  services: [
    {
      id: SERVICE_ID_JUBILEE,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUCGT',
    },
    {
      id: SERVICE_ID_DLR,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZDLCGT',
    },
  ],
};

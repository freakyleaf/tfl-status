import {
  ACCESS_TYPE_PLATFORM,
  ACCESS_TYPE_TRAIN,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_CENTRAL,
  SERVICE_ID_DLR,
  SERVICE_ID_ELIZABETH,
  SERVICE_ID_JUBILEE,
  SERVICE_ID_MILDMAY,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: 'HUBSRA', // Stratford
  services: [
    {
      id: SERVICE_ID_CENTRAL,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '940GZZLUSTD',
    },
    {
      id: SERVICE_ID_JUBILEE,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUSTD',
    },
    {
      id: SERVICE_ID_MILDMAY,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '910GSTFD',
    },
    {
      id: SERVICE_ID_ELIZABETH,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '910GSTFD',
    },
    {
      id: SERVICE_ID_DLR,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZDLSTD',
    },
  ],
};

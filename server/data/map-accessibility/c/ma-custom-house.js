import {
  ACCESS_TYPE_TRAIN,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_DLR,
  SERVICE_ID_ELIZABETH,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: 'HUBCUS', // Custom House
  services: [
    {
      id: SERVICE_ID_ELIZABETH,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '910GCSTMHSXR',
    },
    {
      id: SERVICE_ID_DLR,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZDLCUS',
    },
  ],
};

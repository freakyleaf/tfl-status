import {
  ACCESS_TYPE_TRAIN,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_DLR,
  SERVICE_ID_NORTHERN,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: 'HUBBAN', // Bank
  services: [
    {
      id: SERVICE_ID_NORTHERN,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUBNK',
    },
    {
      id: SERVICE_ID_DLR,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZDLBNK',
    },
  ],
};

import {
  ACCESS_TYPE_TRAIN,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_JUBILEE,
  SERVICE_ID_NORTHERN,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: 'HUBWAT', // Waterloo
  services: [
    {
      id: SERVICE_ID_JUBILEE,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUWLO',
    },
    {
      id: SERVICE_ID_NORTHERN,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUWLO',
    },
  ],
};

import {
  ACCESS_TYPE_TRAIN,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_CIRCLE,
  SERVICE_ID_HAMMERSMITH_CITY,
  SERVICE_ID_METROPOLITAN,
  SERVICE_ID_NORTHERN,
  SERVICE_ID_PICCADILLY,
  SERVICE_ID_VICTORIA,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: 'HUBKGX', // King's Cross and St Pancras International
  services: [
    {
      id: SERVICE_ID_CIRCLE,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUKSX',
    },
    {
      id: SERVICE_ID_HAMMERSMITH_CITY,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUKSX',
    },
    {
      id: SERVICE_ID_METROPOLITAN,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUKSX',
    },
    {
      id: SERVICE_ID_NORTHERN,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUKSX',
    },
    {
      id: SERVICE_ID_PICCADILLY,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUKSX',
    },
    {
      id: SERVICE_ID_VICTORIA,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUKSX',
    },
  ],
};

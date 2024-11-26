import {
  ACCESS_TYPE_PLATFORM,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_RIVER_BUS_1,
  SERVICE_ID_RIVER_BUS_2,
  SERVICE_ID_RIVER_BUS_6,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: '930GWRF', // Royal Wharf Pier
  services: [
    {
      id: SERVICE_ID_RIVER_BUS_1,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '930GWRF',
    },
    {
      id: SERVICE_ID_RIVER_BUS_2,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '930GWRF',
    },
    {
      id: SERVICE_ID_RIVER_BUS_6,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '930GWRF',
    },
  ],
};

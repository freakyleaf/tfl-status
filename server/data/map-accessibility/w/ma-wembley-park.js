import {
  ACCESS_TYPE_TRAIN,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_JUBILEE,
  SERVICE_ID_METROPOLITAN,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: '940GZZLUWYP', // Wembley Park
  services: [
    {
      id: SERVICE_ID_JUBILEE,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUWYP',
    },
    {
      id: SERVICE_ID_METROPOLITAN,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLUWYP',
    },
  ],
};

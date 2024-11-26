import {
  ACCESS_TYPE_PLATFORM,
  ACCESS_TYPE_TRAIN,
} from '../../../constants/accessTypes.js';

import {
  SERVICE_ID_DISTRICT,
  SERVICE_ID_MILDMAY,
} from '../../../constants/serviceIds.js';

export default {
  topMostParentId: 'HUBRMD', // Richmond
  services: [
    {
      id: SERVICE_ID_DISTRICT,
      access: ACCESS_TYPE_TRAIN,
      naptanId: '940GZZLURMD',
    },
    {
      id: SERVICE_ID_MILDMAY,
      access: ACCESS_TYPE_PLATFORM,
      naptanId: '910GRICHMND',
    },
  ],
};

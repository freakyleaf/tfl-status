import {
  SERVICE_GROUP_EXTRA,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_MODE_AEROPLANE,
} from '../../../constants/serviceModes.js';

export default [
  {
    topMostParentId: 'HUBH13', // Heathrow Terminals 2 & 3
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_EXTRA,
          lines: [
            {
              mode: SERVICE_MODE_AEROPLANE,
            },
          ],
        },
      ],
    },
  },
];
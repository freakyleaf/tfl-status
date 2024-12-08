import {
  SERVICE_GROUP_EXTRA,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_MODE_EUROSTAR,
} from '../../../constants/serviceModes.js';

export default [
  {
    topMostParentId: '910GSTFODOM', // Stratford International (Southeastern)
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_EXTRA,
          lines: [
            {
              mode: SERVICE_MODE_EUROSTAR,
            },
          ],
        },
      ],
    },
  },
];

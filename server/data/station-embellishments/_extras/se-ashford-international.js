import {
  SERVICE_GROUP_EXTRA,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_MODE_EUROSTAR,
} from '../../../constants/serviceModes.js';

export default [
  {
    topMostParentId: '910GASHFKY', // Ashford International
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

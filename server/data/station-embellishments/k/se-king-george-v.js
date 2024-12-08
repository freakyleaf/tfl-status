import {
  SERVICE_GROUP_RIVER_BUS,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_WOOLWICH_FERRY,
} from '../../../constants/serviceIds.js';

import {
  SERVICE_MODE_RIVER_BUS,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_WOOLWICH_FERRY,
} from '../../../constants/serviceNames.js';

export default [
  {
    topMostParentId: '940GZZDLKGV', // King George V
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_RIVER_BUS,
          lines: [
            {
              id: SERVICE_ID_WOOLWICH_FERRY,
              labels: [
                {
                  text: 'Woolwich Ferry North Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_WOOLWICH_FERRY,
            },
          ],
        },
      ],
    },
  },
];

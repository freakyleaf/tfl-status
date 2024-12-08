import {
  SERVICE_GROUP_CORE,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_VICTORIA,
} from '../../../constants/serviceIds.js';

import {
  SERVICE_MODE_TUBE,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_VICTORIA,
} from '../../../constants/serviceNames.js';

export default [
  {
    topMostParentId: '930GSGW', // Vauxhall St George Wharf Pier
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_VICTORIA,
              labels: [
                {
                  text: 'Vauxhall',
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_VICTORIA,
            },
          ],
        },
      ],
    },
  },
];

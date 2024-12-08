import {
  SERVICE_GROUP_CORE,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_MILDMAY,
} from '../../../constants/serviceIds.js';

import {
  SERVICE_MODE_OVERGROUND,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_MILDMAY,
} from '../../../constants/serviceNames.js';

export default [
  {
    topMostParentId: '930GCHP', // Chelsea Harbour Pier
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_MILDMAY,
              labels: [
                {
                  text: 'Imperial Wharf',
                },
              ],
              mode: SERVICE_MODE_OVERGROUND,
              name: SERVICE_NAME_MILDMAY,
            },
          ],
        },
      ],
    },
  },
];

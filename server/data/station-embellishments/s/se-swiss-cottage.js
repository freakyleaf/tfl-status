import {
  SERVICE_GROUP_CORE,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_LIONESS,
} from '../../../constants/serviceIds.js';

import {
  SERVICE_MODE_OVERGROUND,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_LIONESS,
} from '../../../constants/serviceNames.js';

import {
  OSI_DISTANCE_SOUTH_HAMPSTEAD_OVERGROUND_SWISS_COTTAGE_TUBE,
} from '../../osiDistances.js';

export default [
  {
    topMostParentId: '940GZZLUSWC', // Swiss Cottage
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_LIONESS,
              labels: [
                {
                  text: 'South Hampstead',
                  distance: OSI_DISTANCE_SOUTH_HAMPSTEAD_OVERGROUND_SWISS_COTTAGE_TUBE,
                },
              ],
              mode: SERVICE_MODE_OVERGROUND,
              name: SERVICE_NAME_LIONESS,
            },
          ],
        },
      ],
    },
  },
];

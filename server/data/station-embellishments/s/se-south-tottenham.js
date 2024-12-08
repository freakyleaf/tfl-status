import {
  SERVICE_GROUP_CORE,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_VICTORIA,
  SERVICE_ID_WEAVER,
} from '../../../constants/serviceIds.js';

import {
  SERVICE_MODE_OVERGROUND,
  SERVICE_MODE_TUBE,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_VICTORIA,
  SERVICE_NAME_WEAVER,
} from '../../../constants/serviceNames.js';

import {
  OSI_DISTANCE_SEVEN_SISTERS_TUBE_SOUTH_TOTTENHAM_LONDON_OVERGROUND,
} from '../../osiDistances.js';

export default [
  {
    topMostParentId: '910GSTOTNHM', // South Tottenham
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_VICTORIA,
              labels: [
                {
                  text: 'Seven Sisters',
                  distance: OSI_DISTANCE_SEVEN_SISTERS_TUBE_SOUTH_TOTTENHAM_LONDON_OVERGROUND,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_VICTORIA,
            },
            {
              id: SERVICE_ID_WEAVER,
              labels: [
                {
                  text: 'Seven Sisters',
                  distance: OSI_DISTANCE_SEVEN_SISTERS_TUBE_SOUTH_TOTTENHAM_LONDON_OVERGROUND,
                },
              ],
              mode: SERVICE_MODE_OVERGROUND,
              name: SERVICE_NAME_WEAVER,
            },
          ],
        },
      ],
    },
  },
];

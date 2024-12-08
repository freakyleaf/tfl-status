import {
  SERVICE_GROUP_CORE,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_WINDRUSH,
} from '../../../constants/serviceIds.js';

import {
  SERVICE_MODE_OVERGROUND,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_WINDRUSH,
} from '../../../constants/serviceNames.js';

import {
  OSI_DISTANCE_PENGE_EAST_NATIONAL_RAIL_PENGE_WEST_OVERGROUND,
} from '../../osiDistances.js';

export default [
  {
    topMostParentId: '910GPNGEE', // Penge East
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_WINDRUSH,
              labels: [
                {
                  text: 'Penge West',
                  distance: OSI_DISTANCE_PENGE_EAST_NATIONAL_RAIL_PENGE_WEST_OVERGROUND,
                },
              ],
              mode: SERVICE_MODE_OVERGROUND,
              name: SERVICE_NAME_WINDRUSH,
            },
          ],
        },
      ],
    },
  },
];

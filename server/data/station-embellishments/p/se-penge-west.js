import {
  SERVICE_GROUP_NATIONAL_RAIL,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_SOUTHEASTERN,
} from '../../../constants/serviceIds.js';

import {
  SERVICE_MODE_NATIONAL_RAIL,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_SOUTHEASTERN,
} from '../../../constants/serviceNames.js';

import {
  OSI_DISTANCE_PENGE_EAST_NATIONAL_RAIL_PENGE_WEST_OVERGROUND,
} from '../../osiDistances.js';

export default [
  {
    topMostParentId: '910GPENEW', // Penge West
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_NATIONAL_RAIL,
          lines: [
            {
              id: SERVICE_ID_SOUTHEASTERN,
              labels: [
                {
                  text: 'Penge East',
                  distance: OSI_DISTANCE_PENGE_EAST_NATIONAL_RAIL_PENGE_WEST_OVERGROUND,
                },
              ],
              mode: SERVICE_MODE_NATIONAL_RAIL,
              name: SERVICE_NAME_SOUTHEASTERN,
            },
          ],
        },
      ],
    },
  },
];

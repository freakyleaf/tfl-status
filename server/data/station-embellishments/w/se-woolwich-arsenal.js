import {
  SERVICE_GROUP_CORE,
  SERVICE_GROUP_RIVER_BUS,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_ELIZABETH,
  SERVICE_ID_RIVER_BUS_1,
  SERVICE_ID_RIVER_BUS_2,
  SERVICE_ID_RIVER_BUS_6,
} from '../../../constants/serviceIds.js';

import {
  SERVICE_MODE_RIVER_BUS,
  SERVICE_MODE_TUBE,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_ELIZABETH,
  SERVICE_NAME_RIVER_BUS_1,
  SERVICE_NAME_RIVER_BUS_2,
  SERVICE_NAME_RIVER_BUS_6,
} from '../../../constants/serviceNames.js';

import {
  OSI_DISTANCE_WOOLWICH_ELIZABETH_LINE_WOOLWICH_ARSENAL_DLR,
} from '../../osiDistances.js';

export default [
  {
    topMostParentId: 'HUBWWA', // Woolwich Arsenal
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_ELIZABETH,
              labels: [
                {
                  text: 'Woolwich',
                  distance: OSI_DISTANCE_WOOLWICH_ELIZABETH_LINE_WOOLWICH_ARSENAL_DLR,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_ELIZABETH,
            },
          ],
        },
        {
          group: SERVICE_GROUP_RIVER_BUS,
          lines: [
            {
              id: SERVICE_ID_RIVER_BUS_1,
              labels: [
                {
                  text: 'Woolwich Arsenal Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_RIVER_BUS_1,
            },
            {
              id: SERVICE_ID_RIVER_BUS_2,
              labels: [
                {
                  text: 'Woolwich Arsenal Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_RIVER_BUS_2,
            },
            {
              id: SERVICE_ID_RIVER_BUS_6,
              labels: [
                {
                  text: 'Woolwich Arsenal Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_RIVER_BUS_6,
            },
          ],
        },
      ],
    },
  },
];

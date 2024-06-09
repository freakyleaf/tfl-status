import {
  SERVICE_GROUP_RIVER_BUS,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_RIVER_BUS_2,
  SERVICE_ID_RIVER_BUS_6,
} from '../../../constants/serviceIds.js';


import {
  SERVICE_MODE_RIVER_BUS,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_RIVER_BUS_2,
  SERVICE_NAME_RIVER_BUS_6,
} from '../../../constants/serviceNames.js';


const stationEmbellishments = [
  {
    topMostParentId: '940GZZLUPYB', // Putney Bridge
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_RIVER_BUS,
          lines: [
            {
              id: SERVICE_ID_RIVER_BUS_2,
              labels: [
                {
                  text: 'Putney Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_RIVER_BUS_2,
            },
            {
              id: SERVICE_ID_RIVER_BUS_6,
              labels: [
                {
                  text: 'Putney Pier',
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

export default stationEmbellishments;

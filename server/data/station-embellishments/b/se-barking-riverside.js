import {
  SERVICE_GROUP_RIVER_BUS,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_RIVER_BUS_1,
} from '../../../constants/serviceIds.js';

import {
  SERVICE_MODE_RIVER_BUS,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_RIVER_BUS_1,
} from '../../../constants/serviceNames.js';

const stationEmbellishments = [
  {
    topMostParentId: '910GBKRVS', // Barking Riverside
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_RIVER_BUS,
          lines: [
            {
              id: SERVICE_ID_RIVER_BUS_1,
              labels: [
                {
                  text: 'Barking Riverside Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_RIVER_BUS_1,
            },
          ],
        },
      ],
    },
  },
];

export default stationEmbellishments;

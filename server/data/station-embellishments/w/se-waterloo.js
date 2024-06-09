import {
  SERVICE_GROUP_INFO,
  SERVICE_GROUP_RIVER_BUS,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_RIVER_BUS_1,
} from '../../../constants/serviceIds.js';

import {
  SERVICE_INFO_SOUTHAMPTON_AIRPORT,
} from '../../../constants/serviceInfo.js';

import {
  SERVICE_MODE_AIRPORT_CONNECTION,
  SERVICE_MODE_RIVER_BUS,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_RIVER_BUS_1,
} from '../../../constants/serviceNames.js';


const stationEmbellishments = [
  {
    topMostParentId: 'HUBWAT', // Waterloo
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_RIVER_BUS,
          lines: [
            {
              id: SERVICE_ID_RIVER_BUS_1,
              labels: [
                {
                  text: 'London Eye Waterloo Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_RIVER_BUS_1,
            },
          ],
        },
        {
          group: SERVICE_GROUP_INFO,
          lines: [
            {
              labels: [
                {
                  text: SERVICE_INFO_SOUTHAMPTON_AIRPORT,
                },
              ],
              mode: SERVICE_MODE_AIRPORT_CONNECTION,
            },
          ],
        },
      ],
    },
  },
];

export default stationEmbellishments;

import {
  SERVICE_GROUP_NATIONAL_RAIL,
  SERVICE_GROUP_RIVER_BUS,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_BAKERLOO,
  SERVICE_ID_NORTHERN,
  SERVICE_ID_RIVER_BUS_1,
  SERVICE_ID_RIVER_BUS_2,
  SERVICE_ID_RIVER_BUS_6,
  SERVICE_ID_SOUTHEASTERN,
} from '../../../constants/serviceIds.js';


import {
  SERVICE_MODE_NATIONAL_RAIL,
  SERVICE_MODE_RIVER_BUS,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_RIVER_BUS_1,
  SERVICE_NAME_RIVER_BUS_2,
  SERVICE_NAME_RIVER_BUS_6,
  SERVICE_NAME_SOUTHEASTERN,
} from '../../../constants/serviceNames.js';

import {
  OSI_DISTANCE_CHARING_CROSS_NATIONAL_RAIL_EMBANKMENT_TUBE,
} from '../../osiDistances.js';

const stationEmbellishments = [
  {
    topMostParentId: '940GZZLUEMB', // Embankment
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_NATIONAL_RAIL,
          lines: [
            {
              id: SERVICE_ID_SOUTHEASTERN,
              ignoreLineIds: [
                SERVICE_ID_BAKERLOO,
                SERVICE_ID_NORTHERN,
              ],
              labels: [
                {
                  text: 'Charing Cross',
                  distance: OSI_DISTANCE_CHARING_CROSS_NATIONAL_RAIL_EMBANKMENT_TUBE,
                },
              ],
              mode: SERVICE_MODE_NATIONAL_RAIL,
              name: SERVICE_NAME_SOUTHEASTERN,
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
                  text: 'Embankment Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_RIVER_BUS_1,
            },
            {
              id: SERVICE_ID_RIVER_BUS_2,
              labels: [
                {
                  text: 'Embankment Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_RIVER_BUS_2,
            },
            {
              id: SERVICE_ID_RIVER_BUS_6,
              labels: [
                {
                  text: 'Embankment Pier',
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

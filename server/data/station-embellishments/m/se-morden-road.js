import {
  SERVICE_GROUP_CORE,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_NORTHERN,
} from '../../../constants/serviceIds.js';

import {
  SERVICE_MODE_TUBE,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_NORTHERN,
} from '../../../constants/serviceNames.js';

import {
  OSI_DISTANCE_MORDEN_ROAD_TRAM_SOUTH_WIMBLEDON_TUBE,
} from '../../osiDistances.js';

export default [
  {
    topMostParentId: '940GZZCRMDN', // Morden Road
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_NORTHERN,
              labels: [
                {
                  text: 'South Wimbledon',
                  distance: OSI_DISTANCE_MORDEN_ROAD_TRAM_SOUTH_WIMBLEDON_TUBE,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_NORTHERN,
            },
          ],
        },
      ],
    },
  },
];

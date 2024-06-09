import {
  SERVICE_GROUP_CORE,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_TRAM,
} from '../../../constants/serviceIds.js';


import {
  SERVICE_MODE_TRAM,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_TRAM,
} from '../../../constants/serviceNames.js';

import {
  OSI_DISTANCE_MORDEN_ROAD_TRAM_SOUTH_WIMBLEDON_TUBE,
} from '../../osiDistances.js';

const stationEmbellishments = [
  {
    topMostParentId: '940GZZLUSWN', // South Wimbledon
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_TRAM,
              labels: [
                {
                  text: 'Morden Road',
                  distance: OSI_DISTANCE_MORDEN_ROAD_TRAM_SOUTH_WIMBLEDON_TUBE,
                },
              ],
              mode: SERVICE_MODE_TRAM,
              name: SERVICE_NAME_TRAM,
            },
          ],
        },
      ],
    },
  },
];

export default stationEmbellishments;

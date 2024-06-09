import {
  SERVICE_GROUP_CORE,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_CIRCLE,
  SERVICE_ID_HAMMERSMITH_CITY,
} from '../../../constants/serviceIds.js';


import {
  SERVICE_MODE_TUBE,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_CIRCLE,
  SERVICE_NAME_HAMMERSMITH_CITY,
} from '../../../constants/serviceNames.js';

import {
  OSI_DISTANCE_WHITE_CITY_TUBE_WOOD_LANE_TUBE,
} from '../../osiDistances.js';

const stationEmbellishments = [
  {
    topMostParentId: '940GZZLUWCY', // White City
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_CIRCLE,
              labels: [
                {
                  text: 'Wood Lane',
                  distance: OSI_DISTANCE_WHITE_CITY_TUBE_WOOD_LANE_TUBE,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_CIRCLE,
            },
            {
              id: SERVICE_ID_HAMMERSMITH_CITY,
              labels: [
                {
                  text: 'Wood Lane',
                  distance: OSI_DISTANCE_WHITE_CITY_TUBE_WOOD_LANE_TUBE,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_HAMMERSMITH_CITY,
            },
          ],
        },
      ],
    },
  },
];

export default stationEmbellishments;

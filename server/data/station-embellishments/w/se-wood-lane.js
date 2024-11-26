import {
  SERVICE_GROUP_CORE,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_CENTRAL,
} from '../../../constants/serviceIds.js';

import {
  SERVICE_MODE_TUBE,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_CENTRAL,
} from '../../../constants/serviceNames.js';

import {
  OSI_DISTANCE_WHITE_CITY_TUBE_WOOD_LANE_TUBE,
} from '../../osiDistances.js';

const stationEmbellishments = [
  {
    topMostParentId: '940GZZLUWLA', // Wood Lane
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_CENTRAL,
              labels: [
                {
                  text: 'White City',
                  distance: OSI_DISTANCE_WHITE_CITY_TUBE_WOOD_LANE_TUBE,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_CENTRAL,
            },
          ],
        },
      ],
    },
  },
];

export default stationEmbellishments;

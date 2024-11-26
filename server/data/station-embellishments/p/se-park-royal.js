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
  OSI_DISTANCE_HANGER_LANE_TUBE_PARK_ROYAL_TUBE,
} from '../../osiDistances.js';

const stationEmbellishments = [
  {
    topMostParentId: '940GZZLUPKR', // Park Royal
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_CENTRAL,
              labels: [
                {
                  text: 'Hanger Lane',
                  distance: OSI_DISTANCE_HANGER_LANE_TUBE_PARK_ROYAL_TUBE,
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

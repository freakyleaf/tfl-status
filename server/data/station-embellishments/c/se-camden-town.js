import {
  SERVICE_GROUP_CORE,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_LONDON_OVERGROUND,
} from '../../../constants/serviceIds.js';


import {
  SERVICE_MODE_OVERGROUND,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_LONDON_OVERGROUND,
} from '../../../constants/serviceNames.js';

import {
  OSI_DISTANCE_CAMDEN_ROAD_LONDON_OVERGROUND_CAMDEN_TOWN_TUBE,
} from '../../osiDistances.js';

const stationEmbellishments = [
  {
    topMostParentId: '940GZZLUCTN', // Camden Town
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_LONDON_OVERGROUND,
              labels: [
                {
                  text: 'Camden Road',
                  distance: OSI_DISTANCE_CAMDEN_ROAD_LONDON_OVERGROUND_CAMDEN_TOWN_TUBE,
                },
              ],
              mode: SERVICE_MODE_OVERGROUND,
              name: SERVICE_NAME_LONDON_OVERGROUND,
            },
          ],
        },
      ],
    },
  },
];

export default stationEmbellishments;

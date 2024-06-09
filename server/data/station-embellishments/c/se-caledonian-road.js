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
  OSI_DISTANCE_CALEDONIAN_ROAD_TUBE_CALEDONIAN_ROAD_BARNSBURY_LONDON_OVERGROUND,
} from '../../osiDistances.js';

const stationEmbellishments = [
  {
    topMostParentId: '940GZZLUCAR', // Caledonian Road
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_LONDON_OVERGROUND,
              labels: [
                {
                  text: 'Caledonian Road & Barnsbury',
                  distance: OSI_DISTANCE_CALEDONIAN_ROAD_TUBE_CALEDONIAN_ROAD_BARNSBURY_LONDON_OVERGROUND,
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

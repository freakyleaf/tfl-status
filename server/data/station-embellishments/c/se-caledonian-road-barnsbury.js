import {
  SERVICE_GROUP_CORE,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_PICCADILLY,
} from '../../../constants/serviceIds.js';


import {
  SERVICE_MODE_TUBE,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_PICCADILLY,
} from '../../../constants/serviceNames.js';

import {
  OSI_DISTANCE_CALEDONIAN_ROAD_TUBE_CALEDONIAN_ROAD_BARNSBURY_LONDON_OVERGROUND,
} from '../../osiDistances.js';

const stationEmbellishments = [
  {
    topMostParentId: '910GCLDNNRB', // Caledonian Road & Barnsbury
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_PICCADILLY,
              labels: [
                {
                  text: 'Caledonian Road',
                  distance: OSI_DISTANCE_CALEDONIAN_ROAD_TUBE_CALEDONIAN_ROAD_BARNSBURY_LONDON_OVERGROUND,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_PICCADILLY,
            },
          ],
        },
      ],
    },
  },
];

export default stationEmbellishments;

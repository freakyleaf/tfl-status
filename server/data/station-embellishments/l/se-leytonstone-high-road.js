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
  OSI_DISTANCE_LEYTONSTONE_TUBE_LEYTONSTONE_HIGH_ROAD_LONDON_OVERGROUND,
} from '../../osiDistances.js';

export default [
  {
    topMostParentId: '910GLYTNSHR', // Leytonstone High Road
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_CENTRAL,
              labels: [
                {
                  text: 'Leytonstone',
                  distance: OSI_DISTANCE_LEYTONSTONE_TUBE_LEYTONSTONE_HIGH_ROAD_LONDON_OVERGROUND,
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

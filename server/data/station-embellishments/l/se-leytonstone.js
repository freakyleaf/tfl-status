import {
  SERVICE_GROUP_CORE,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_SUFFRAGETTE,
} from '../../../constants/serviceIds.js';

import {
  SERVICE_MODE_OVERGROUND,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_SUFFRAGETTE,
} from '../../../constants/serviceNames.js';

import {
  OSI_DISTANCE_LEYTONSTONE_TUBE_LEYTONSTONE_HIGH_ROAD_LONDON_OVERGROUND,
} from '../../osiDistances.js';

export default [
  {
    topMostParentId: '940GZZLULYS', // Leytonstone
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_SUFFRAGETTE,
              labels: [
                {
                  text: 'Leytonstone High Road',
                  distance: OSI_DISTANCE_LEYTONSTONE_TUBE_LEYTONSTONE_HIGH_ROAD_LONDON_OVERGROUND,
                },
              ],
              mode: SERVICE_MODE_OVERGROUND,
              name: SERVICE_NAME_SUFFRAGETTE,
            },
          ],
        },
      ],
    },
  },
];

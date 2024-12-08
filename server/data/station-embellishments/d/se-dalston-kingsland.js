import {
  SERVICE_GROUP_CORE,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_WINDRUSH,
} from '../../../constants/serviceIds.js';

import {
  SERVICE_MODE_OVERGROUND,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_WINDRUSH,
} from '../../../constants/serviceNames.js';

import {
  OSI_DISTANCE_DALSTON_JUNCTION_LONDON_OVERGROUND_DALSTON_KINGSLAND_LONDON_OVERGROUND,
} from '../../osiDistances.js';

export default [
  {
    topMostParentId: '910GDALSKLD', // Dalston Kingsland
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_WINDRUSH,
              labels: [
                {
                  text: 'Dalston Junction',
                  distance: OSI_DISTANCE_DALSTON_JUNCTION_LONDON_OVERGROUND_DALSTON_KINGSLAND_LONDON_OVERGROUND,
                },
              ],
              mode: SERVICE_MODE_OVERGROUND,
              name: SERVICE_NAME_WINDRUSH,
            },
          ],
        },
      ],
    },
  },
];

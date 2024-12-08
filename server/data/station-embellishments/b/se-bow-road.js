import {
  SERVICE_GROUP_CORE,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_DLR,
} from '../../../constants/serviceIds.js';

import {
  SERVICE_MODE_DLR,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_DLR,
} from '../../../constants/serviceNames.js';

import {
  OSI_DISTANCE_BOW_CHURCH_DLR_BOW_ROAD_TUBE,
} from '../../osiDistances.js';

export default [
  {
    topMostParentId: '940GZZLUBWR', // Bow Road
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_DLR,
              labels: [
                {
                  text: 'Bow Church',
                  distance: OSI_DISTANCE_BOW_CHURCH_DLR_BOW_ROAD_TUBE,
                },
              ],
              mode: SERVICE_MODE_DLR,
              name: SERVICE_NAME_DLR,
            },
          ],
        },
      ],
    },
  },
];

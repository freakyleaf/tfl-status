import {
  SERVICE_GROUP_CORE,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_DLR,
} from '../../../constants/serviceIds.js';

import {
  SERVICE_MODE_TUBE,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_DLR,
} from '../../../constants/serviceNames.js';

import {
  OSI_DISTANCE_WOOLWICH_ELIZABETH_LINE_WOOLWICH_ARSENAL_DLR,
} from '../../osiDistances.js';

export default [
  {
    topMostParentId: '910GWOLWXR', // Woolwich
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_DLR,
              labels: [
                {
                  text: 'Woolwich Arsenal',
                  distance: OSI_DISTANCE_WOOLWICH_ELIZABETH_LINE_WOOLWICH_ARSENAL_DLR,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_DLR,
            },
          ],
        },
      ],
    },
  },
];

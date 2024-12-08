import {
  SERVICE_GROUP_CORE,
  SERVICE_GROUP_NATIONAL_RAIL,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_DLR,
  SERVICE_ID_SOUTHEASTERN,
  SERVICE_ID_THAMESLINK,
} from '../../../constants/serviceIds.js';

import {
  SERVICE_MODE_NATIONAL_RAIL,
  SERVICE_MODE_TUBE,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_DLR,
  SERVICE_NAME_SOUTHEASTERN,
  SERVICE_NAME_THAMESLINK,
} from '../../../constants/serviceNames.js';

export default [
  {
    topMostParentId: '930GWAS', // Woolwich Arsenal Pier
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
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_DLR,
            },
          ],
        },
        {
          group: SERVICE_GROUP_NATIONAL_RAIL,
          lines: [
            {
              id: SERVICE_ID_SOUTHEASTERN,
              labels: [
                {
                  text: 'Woolwich Arsenal',
                },
              ],
              mode: SERVICE_MODE_NATIONAL_RAIL,
              name: SERVICE_NAME_SOUTHEASTERN,
            },
            {
              id: SERVICE_ID_THAMESLINK,
              labels: [
                {
                  text: 'Woolwich Arsenal',
                },
              ],
              mode: SERVICE_MODE_NATIONAL_RAIL,
              name: SERVICE_NAME_THAMESLINK,
            },
          ],
        },
      ],
    },
  },
];

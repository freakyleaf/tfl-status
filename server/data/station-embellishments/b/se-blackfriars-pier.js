import {
  SERVICE_GROUP_CORE,
  SERVICE_GROUP_NATIONAL_RAIL,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_CIRCLE,
  SERVICE_ID_DISTRICT,
  SERVICE_ID_SOUTHEASTERN,
  SERVICE_ID_THAMESLINK,
} from '../../../constants/serviceIds.js';

import {
  SERVICE_MODE_NATIONAL_RAIL,
  SERVICE_MODE_TUBE,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_CIRCLE,
  SERVICE_NAME_DISTRICT,
  SERVICE_NAME_SOUTHEASTERN,
  SERVICE_NAME_THAMESLINK,
} from '../../../constants/serviceNames.js';

const stationEmbellishments = [
  {
    topMostParentId: '930GBFR', // Blackfriars Pier
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_CIRCLE,
              labels: [
                {
                  text: 'Blackfriars',
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_CIRCLE,
            },
            {
              id: SERVICE_ID_DISTRICT,
              labels: [
                {
                  text: 'Blackfriars',
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_DISTRICT,
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
                  text: 'Blackfriars',
                },
              ],
              mode: SERVICE_MODE_NATIONAL_RAIL,
              name: SERVICE_NAME_SOUTHEASTERN,
            },
            {
              id: SERVICE_ID_THAMESLINK,
              labels: [
                {
                  text: 'Blackfriars',
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

export default stationEmbellishments;

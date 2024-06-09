import {
  SERVICE_GROUP_CORE,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_DLR,
  SERVICE_ID_ELIZABETH,
  SERVICE_ID_JUBILEE,
} from '../../../constants/serviceIds.js';


import {
  SERVICE_MODE_TUBE,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_DLR,
  SERVICE_NAME_ELIZABETH,
  SERVICE_NAME_JUBILEE,
} from '../../../constants/serviceNames.js';


const stationEmbellishments = [
  {
    topMostParentId: '930GCAW', // Canary Wharf Pier
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_JUBILEE,
              labels: [
                {
                  text: 'Canary Wharf',
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_JUBILEE,
            },
            {
              id: SERVICE_ID_ELIZABETH,
              labels: [
                {
                  text: 'Canary Wharf',
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_ELIZABETH,
            },
            {
              id: SERVICE_ID_DLR,
              labels: [
                {
                  text: 'Canary Wharf',
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

export default stationEmbellishments;

import {
  SERVICE_GROUP_INFO,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_INFO_SOUTHEND_AIRPORT,
  SERVICE_INFO_STANSTED_AIRPORT,
} from '../../../constants/serviceInfo.js';

import {
  SERVICE_MODE_AIRPORT_CONNECTION,
} from '../../../constants/serviceModes.js';

const stationEmbellishments = [
  {
    topMostParentId: 'HUBLST', // Liverpool Street
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_INFO,
          lines: [
            {
              labels: [
                {
                  text: SERVICE_INFO_SOUTHEND_AIRPORT,
                },
                {
                  text: SERVICE_INFO_STANSTED_AIRPORT,
                },
              ],
              mode: SERVICE_MODE_AIRPORT_CONNECTION,
            },
          ],
        },
      ],
    },
  },
];

export default stationEmbellishments;

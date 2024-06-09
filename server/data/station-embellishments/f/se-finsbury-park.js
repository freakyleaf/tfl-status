import {
  SERVICE_GROUP_INFO,
} from '../../../constants/serviceGroups.js';


import {
  SERVICE_INFO_GATWICK_AIRPORT,
} from '../../../constants/serviceInfo.js';

import {
  SERVICE_MODE_AIRPORT_CONNECTION,
} from '../../../constants/serviceModes.js';



const stationEmbellishments = [
  {
    topMostParentId: 'HUBFPK', // Finsbury Park
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_INFO,
          lines: [
            {
              labels: [
                {
                  text: SERVICE_INFO_GATWICK_AIRPORT,
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
